"use strict";

// This page illustrates one fixed v0.5 forecast; it does not execute the .NET engine.
const sample = Object.freeze({
  cumulativeP50: 206461,
  cumulativeP90: 306628,
  model: "offline-test-model",
  simulationCount: 10000
});

const numberFormat = new Intl.NumberFormat("en-US");

function setupBudgetDemo() {
  const slider = document.getElementById("budget-slider");
  const budgetValue = document.getElementById("budget-value");
  const verdict = document.getElementById("budget-verdict");
  const explanation = document.getElementById("verdict-reason");

  if (!slider || !budgetValue || !verdict || !explanation) {
    return;
  }

  function update() {
    const budget = Number(slider.value);
    const capText = numberFormat.format(budget);
    const forecastText = numberFormat.format(sample.cumulativeP90);
    const isBelowP90 = budget < sample.cumulativeP90;
    const min = Number(slider.min);
    const max = Number(slider.max);

    budgetValue.textContent = capText + " tokens";
    slider.style.setProperty("--fill", ((budget - min) / (max - min) * 100) + "%");
    verdict.textContent = isBelowP90 ? "REJECT" : "WARNING";
    verdict.classList.toggle("reject", isBelowP90);
    verdict.classList.toggle("warning", !isBelowP90);

    explanation.textContent = isBelowP90
      ? "The modeled P90 of " + forecastText + " tokens exceeds your " + capText + "-token cap."
      : "Your cap exceeds the sample P90, but uncalibrated forecasts and approval gates still require review.";
  }

  slider.addEventListener("input", update);
  update();
}

function setupMobileNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("mobile-nav");

  if (!toggle || !navigation) {
    return;
  }

  function closeNavigation() {
    navigation.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle.addEventListener("click", () => {
    const nextExpanded = toggle.getAttribute("aria-expanded") !== "true";
    navigation.hidden = !nextExpanded;
    toggle.setAttribute("aria-expanded", String(nextExpanded));
    toggle.setAttribute("aria-label", nextExpanded ? "Close navigation" : "Open navigation");
  });

  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupBudgetDemo();
  setupMobileNavigation();

  const year = document.getElementById("copyright-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});

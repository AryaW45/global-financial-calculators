const container = document.getElementById("calculator-container");
document.getElementById("calculator-select").addEventListener("change", function () {
  const selected = this.value;
  loadCalculator(selected);
});

function loadCalculator(type) {
  container.innerHTML = "";
  switch (type) {
    case "fixed-deposit":
      container.innerHTML = `
        <div class="calculator">
          <h2>Fixed / Term / Time Deposit</h2>
          <input id="fd-principal" type="number" placeholder="Principal Amount">
          <input id="fd-rate" type="number" placeholder="Annual Interest Rate (%)">
          <input id="fd-time" type="number" placeholder="Time (Years)">
          <button onclick="calculateFD()">Calculate</button>
          <div id="fd-result" class="result"></div>
        </div>`;
      break;

    case "rd":
      container.innerHTML = `
        <div class="calculator">
          <h2>Recurring Deposit (RD)</h2>
          <input id="rd-monthly" type="number" placeholder="Monthly Investment">
          <input id="rd-rate" type="number" placeholder="Annual Interest Rate (%)">
          <input id="rd-time" type="number" placeholder="Time (Months)">
          <button onclick="calculateRD()">Calculate</button>
          <div id="rd-result" class="result"></div>
        </div>`;
      break;

    case "sip":
      container.innerHTML = `
        <div class="calculator">
          <h2>SIP Calculator</h2>
          <input id="sip-amount" type="number" placeholder="Monthly Investment">
          <input id="sip-rate" type="number" placeholder="Expected annual Return Rate (%)">
          <input id="sip-time" type="number" placeholder="Time (Years)">
          <button onclick="calculateSIP()">Calculate</button>
          <div id="sip-result" class="result"></div>
        </div>`;
      break;

    case "goal-sip":
      container.innerHTML = `
        <div class="calculator">
          <h2>Goal-Based SIP</h2>
          <input id="goal-future" type="number" placeholder="Target Amount">
          <input id="goal-rate" type="number" placeholder="Expected annual Return Rate (%)">
          <input id="goal-time" type="number" placeholder="Time (Years)">
          <button onclick="calculateGoalSIP()">Calculate</button>
          <div id="goal-sip-result" class="result"></div>
        </div>`;
      break;

    case "compound-interest":
      container.innerHTML = `
        <div class="calculator">
          <h2>Compound Interest</h2>
          <input id="ci-principal" type="number" placeholder="Principal Amount">
          <input id="ci-rate" type="number" placeholder="Annual Interest Rate (%)">
          <input id="ci-time" type="number" placeholder="Time (Years)">
          <input id="ci-frequency" type="number" placeholder="Compounding frequency">
          <button onclick="calculateCI()">Calculate</button>
          <div id="ci-result" class="result"></div>
        </div>`;
      break;

      // Add these cases inside loadCalculator switch:

case "cagr":
  container.innerHTML = `
    <div class="calculator">
      <h2>CAGR Calculator</h2>
      <input id="cagr-begin" type="number" placeholder="Beginning Value">
      <input id="cagr-end" type="number" placeholder="Ending Value">
      <input id="cagr-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateCAGR()">Calculate</button>
      <div id="cagr-result" class="result"></div>
    </div>`;
  break;

case "lumpsum":
  container.innerHTML = `
    <div class="calculator">
      <h2>Lumpsum Investment</h2>
      <input id="lumpsum-amount" type="number" placeholder="Investment Amount">
      <input id="lumpsum-rate" type="number" placeholder="Expected annual Return Rate (%)">
      <input id="lumpsum-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateLumpsum()">Calculate</button>
      <div id="lumpsum-result" class="result"></div>
    </div>`;
  break;

case "step-up-sip":
  container.innerHTML = `
    <div class="calculator">
      <h2>Step-Up SIP Growth Calculator</h2>
      <input id="step-up-sip-amount" type="number" placeholder="Monthly Investment">
      <input id="step-up-sip-rate" type="number" placeholder="Expected Annual Return (%)">
      <input id="step-up-sip-time" type="number" placeholder="Time (Years)">
      <input id="step-up-sip-increment" type="number" placeholder="Annual Increase (%)">
      <button onclick="calculateStepUpSIP()">Calculate</button>
      <div id="step-up-sip-result" class="result"></div>
    </div>`;
  break;
      
  case "lumpsum-topup":
  container.innerHTML = `
    <div class="calculator">
      <h2>Lumpsum + Top-Up Investment Calculator</h2>
      <input id="lumpsum-principal" type="number" placeholder="Initial Lumpsum">
      <input id="lumpsum-rate" type="number" placeholder="Expected annual Return (%)">
      <input id="lumpsum-time" type="number" placeholder="Total Time (Years)">
      <input id="topup-amount1" type="number" placeholder="Top-Up 1 (Amount) ">
      <input id="topup-year1" type="number" placeholder="Top-Up 1 (Years after initial lumpsum)">
      <input id="topup-amount2" type="number" placeholder="Top-Up 2 (Amount)">
      <input id="topup-year2" type="number" placeholder="Top-Up 2 (Years after initial lumpsum)">
      <input id="topup-amount3" type="number" placeholder="Top-Up Amount 3">
      <input id="topup-year3" type="number" placeholder="Top-Up 3 (Years after initial lumpsum)">
      <button onclick="calculateLumpsumTopup()">Calculate</button>
      <div id="lumpsum-topup-result" class="result"></div>
    </div>`;
  break;
  
 case "epf-401k":
  container.innerHTML = `
    <div class="calculator">
      <h2>EPF / 401(k) Retirement Savings Calculator</h2>
      <input id="epf-401k-employee" type="number" placeholder="Your Monthly Contribution">
      <input id="epf-401k-employer" type="number" placeholder="Employer's Monthly Contribution">
      <input id="epf-401k-rate" type="number" placeholder="Annual Interest (%)">
      <input id="epf-401k-years" type="number" placeholder="Time (Years)">
      <button onclick="calculateEPF401k()">Calculate</button>
      <div id="epf-401k-result" class="result"></div>
    </div>`;
  break;
      
 case "ppf-ira":
  container.innerHTML = `
    <div class="calculator">
      <h2>PPF / IRA Growth Calculator</h2>
      <input id="ppf-ira-annual" type="number" placeholder="Annual Contribution">
      <input id="ppf-ira-rate" type="number" placeholder="Annual Interest (%)">
      <input id="ppf-ira-years" type="number" placeholder="Time (Years)">
      <button onclick="calculatePPFIRA()">Calculate</button>
      <div id="ppf-ira-result" class="result"></div>
    </div>`;
  break;
      
 case "lumpsum-vs-sip":
  container.innerHTML = `
    <div class="calculator">
      <h2>Lumpsum vs SIP Comparison Calculator</h2>
      <input id="ls-vs-sip-amount" type="number" placeholder="Monthly SIP Amount">
      <input id="ls-vs-sip-lumpsum" type="number" placeholder="Lumpsum Investment">
      <input id="ls-vs-sip-rate" type="number" placeholder="Expected annual Return (%)">
      <input id="ls-vs-sip-years" type="number" placeholder="Time (Years)">
      <button onclick="calculateLumpsumVsSIP()">Calculate</button>
      <div id="ls-vs-sip-result" class="result"></div>
    </div>`;
  break;
      
  case "drip":
  container.innerHTML = `
    <div class="calculator">
      <h2>Dividend Reinvestment (DRIP) Calculator</h2>
      <input id="drip-principal" type="number" placeholder="Initial Investment">
      <input id="drip-dividend" type="number" placeholder="Dividend Yield (%)">
      <input id="drip-growth" type="number" placeholder="Annual Growth (%)">
      <input id="drip-years" type="number" placeholder="Time (Years)">
      <button onclick="calculateDRIP()">Calculate</button>
      <div id="drip-result" class="result"></div>
    </div>`;
  break;

  case "loan-emi":
  container.innerHTML = `
    <div class="calculator">
      <h2>Loan & EMI Calculator</h2>
      <input id="loan-principal" type="number" placeholder="Loan Amount">
      <input id="loan-rate" type="number" placeholder="Annual Interest Rate (%)">
      <input id="loan-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateLoanEMI()">Calculate</button>
      <div id="loan-result" class="result"></div>
    </div>`;
  break;

case "balance-transfer":
  container.innerHTML = `
    <div class="calculator">
      <h2>Loan Balance Transfer / Refinance</h2>
      <input id="old-principal" type="number" placeholder="Old Loan Balance">
      <input id="old-rate" type="number" placeholder="Old Interest Rate (%)">
      <input id="old-time" type="number" placeholder="Remaining Time (Years)">
      <input id="new-rate" type="number" placeholder="New Interest Rate (%)">
      <input id="new-time" type="number" placeholder="New Loan Time (Years)">
      <button onclick="calculateBalanceTransfer()">Calculate</button>
      <div id="balance-transfer-result" class="result"></div>
    </div>`;
  break;

case "amortization":
  container.innerHTML = `
    <div class="calculator">
      <h2>Amortization Schedule</h2>
      <input id="amort-principal" type="number" placeholder="Loan Amount">
      <input id="amort-rate" type="number" placeholder="Annual Interest Rate (%)">
      <input id="amort-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateAmortization()">Calculate</button>
      <div id="amort-result" class="result"></div>
    </div>`;
  break;

case "mortgage":
  container.innerHTML = `
    <div class="calculator">
      <h2>Mortgage Calculator</h2>
      <input id="mortgage-principal" type="number" placeholder="Loan Amount">
      <input id="mortgage-rate" type="number" placeholder="Annual Interest Rate (%)">
      <input id="mortgage-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateMortgage()">Calculate</button>
      <div id="mortgage-result" class="result"></div>
    </div>`;
  break;
      
  case "credit-card-payoff":
  container.innerHTML = `
    <div class="calculator">
      <h2>Credit Card Payoff Calculator</h2>
      <input id="cc-balance" type="number" placeholder="Current Balance">
      <input id="cc-rate" type="number" placeholder="Annual Interest Rate (%)">
      <input id="cc-payment" type="number" placeholder="Monthly Payment">
      <button onclick="calculateCreditCardPayoff()">Calculate</button>
      <div id="cc-result" class="result"></div>
    </div>`;
  break;
      
  case "home-affordability":
  container.innerHTML = `
    <div class="calculator">
      <h2>Home Affordability Calculator</h2>
      <input id="ha-income" type="number" placeholder="Your Gross Annual Income">
      <input id="ha-downpayment" type="number" placeholder="Down Payment">
      <input id="ha-rate" type="number" placeholder="Mortgage Interest Rate (%)">
      <input id="ha-term" type="number" placeholder="Loan Term (Years)">
      <button onclick="calculateHomeAffordability()">Calculate</button>
      <div id="ha-result" class="result"></div>
    </div>`;
  break;

  case "retirement":
  container.innerHTML = `
    <div class="calculator">
      <h2>Retirement Planning Calculator</h2>
      <input id="retire-current-age" type="number" placeholder="Current Age">
      <input id="retire-retire-age" type="number" placeholder="Retirement Age">
      <input id="retire-expenses" type="number" placeholder="Monthly Expenses at Retirement">
      <input id="retire-inflation" type="number" placeholder="Inflation Rate (%)">
      <input id="retire-return" type="number" placeholder="Expected Return Rate (%)">
      <button onclick="calculateRetirement()">Calculate</button>
      <div id="retirement-result" class="result"></div>
    </div>`;
  break;

case "inflation":
  container.innerHTML = `
    <div class="calculator">
      <h2>Inflation Impact Calculator</h2>
      <input id="inflation-amount" type="number" placeholder="Current Amount">
      <input id="inflation-rate" type="number" placeholder="Annual Inflation Rate (%)">
      <input id="inflation-years" type="number" placeholder="Years">
      <button onclick="calculateInflation()">Calculate</button>
      <div id="inflation-result" class="result"></div>
    </div>`;
  break;

case "education":
  container.innerHTML = `
    <div class="calculator">
      <h2>Education Planning Calculator</h2>
      <input id="edu-current-cost" type="number" placeholder="Current Education Cost">
      <input id="edu-inflation" type="number" placeholder="Inflation Rate (%)">
      <input id="edu-years" type="number" placeholder="Years Until Education">
      <input id="edu-return" type="number" placeholder="Investment Return Rate (%)">
      <button onclick="calculateEducation()">Calculate</button>
      <div id="education-result" class="result"></div>
    </div>`;
  break;

case "mis":
  container.innerHTML = `
    <div class="calculator">
      <h2>Monthly Income Scheme (MIS)</h2>
      <input id="mis-principal" type="number" placeholder="Investment Amount">
      <input id="mis-rate" type="number" placeholder="Annual Interest Rate (%)">
      <input id="mis-time" type="number" placeholder="Time (Years)">
      <button onclick="calculateMIS()">Calculate</button>
      <div id="mis-result" class="result"></div>
    </div>`;
  break;

case "gratuity":
  container.innerHTML = `
    <div class="calculator">
      <h2>Gratuity Calculator</h2>
      <input id="gratuity-salary" type="number" placeholder="Last Drawn applicable part of the Salary">
      <input id="gratuity-years" type="number" placeholder="Years of Service">
      <button onclick="calculateGratuity()">Calculate</button>
      <div id="gratuity-result" class="result"></div>
    </div>`;
  break;
      
case "leave-encashment":
  container.innerHTML = `
    <div class="calculator">
      <h2>Leave Encashment Calculator</h2>
      <input id="leave-days" type="number" placeholder="Number of Leave Days">
      <input id="leave-daily-rate" type="number" placeholder="Daily Salary Rate">
      <button onclick="calculateLeaveEncashment()">Calculate</button>
      <div id="leave-encashment-result" class="result"></div>
    </div>`;
  break;
      
  case "emergency-fund":
  container.innerHTML = `
    <div class="calculator">
      <h2>Emergency Fund Calculator</h2>
      <input id="monthly-expenses" type="number" placeholder="Monthly Expenses">
      <input id="months" type="number" placeholder="Desired Coverage (Months)">
      <button onclick="calculateEmergencyFund()">Calculate</button>
      <div id="emergency-fund-result" class="result"></div>
    </div>`;
  break;
      
  case "net-worth":
  container.innerHTML = `
    <div class="calculator">
      <h2>Net Worth Calculator</h2>
      <textarea id="assets-list" placeholder="Assets (comma separated amounts)"></textarea>
      <textarea id="liabilities-list" placeholder="Liabilities (comma separated amounts)"></textarea>
      <button onclick="calculateNetWorth()">Calculate</button>
      <div id="net-worth-result" class="result"></div>
    </div>`;
  break;
      
 case "rule-of-72":
  container.innerHTML = `
    <div class="calculator">
      <h2>Rule of 72 Calculator</h2>
      <input id="interest-rate" type="number" placeholder="Annual Interest Rate (%)">
      <button onclick="calculateRuleOf72()">Calculate</button>
      <div id="rule-of-72-result" class="result"></div>
    </div>`;
  break;
      
  case "retirement-corpus":
  container.innerHTML = `
    <div class="calculator">
      <h2>Retirement Corpus Calculator</h2>
      <input id="target-corpus" type="number" placeholder="Target Corpus">
      <input id="retirement-rate" type="number" placeholder="Expected Return (%)">
      <input id="retirement-years" type="number" placeholder="Years to Invest">
      <button onclick="calculateRetirementCorpus()">Calculate</button>
      <div id="retirement-corpus-result" class="result"></div>
    </div>`;
  break;

  }
}

// Formulas & Functions
function calculateFD() {
  let p = parseFloat(document.getElementById("fd-principal").value);
  let r = parseFloat(document.getElementById("fd-rate").value) / 100;
  let t = parseFloat(document.getElementById("fd-time").value);
  let n = 4; // Quarterly compounding

  let maturity = p * Math.pow((1 + r / n), n * t);
  document.getElementById("fd-result").innerText = `Maturity Value: ${maturity.toFixed(2)}`;
}

function calculateRD() {
  let m = parseFloat(document.getElementById("rd-monthly").value);
  let annualRate = parseFloat(document.getElementById("rd-rate").value) / 100;
  let n = parseFloat(document.getElementById("rd-time").value);

  let i = annualRate / 12;  // monthly interest rate

  // Calculate maturity value for RD with monthly compounding
  let maturity = m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);

  document.getElementById("rd-result").innerText = `Maturity Value: ${maturity.toFixed(2)}`;
}


function calculateSIP() {
  let a = parseFloat(document.getElementById("sip-amount").value);
  let r = parseFloat(document.getElementById("sip-rate").value) / 1200;
  let n = parseFloat(document.getElementById("sip-time").value) * 12;
  let maturity = a * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  document.getElementById("sip-result").innerText = `Maturity Value: ${maturity.toFixed(2)}`;
}

function calculateGoalSIP() {
  let fv = parseFloat(document.getElementById("goal-future").value);
  let r = parseFloat(document.getElementById("goal-rate").value) / 1200;
  let n = parseFloat(document.getElementById("goal-time").value) * 12;
  let sip = fv * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
  document.getElementById("goal-sip-result").innerText = `Required SIP: ${sip.toFixed(2)} per month`;
}

function calculateCI() {
  let p = parseFloat(document.getElementById("ci-principal").value);
  let r = parseFloat(document.getElementById("ci-rate").value) / 100;
  let t = parseFloat(document.getElementById("ci-time").value);
  let n = parseFloat(document.getElementById("ci-frequency").value);
  let a = p * Math.pow((1 + r / n), n * t);
  document.getElementById("ci-result").innerText = `Maturity Value: ${a.toFixed(2)}`;
}
function calculateCAGR() {
  let begin = parseFloat(document.getElementById("cagr-begin").value);
  let end = parseFloat(document.getElementById("cagr-end").value);
  let time = parseFloat(document.getElementById("cagr-time").value);
  if (begin <= 0 || end <= 0 || time <= 0) {
    return showResult("cagr-result", "Values must be > 0");
  }
  let cagr = Math.pow(end / begin, 1 / time) - 1;
  showResult("cagr-result", `CAGR: ${(cagr * 100).toFixed(2)}%`);
}

function calculateLumpsum() {
  let p = parseFloat(document.getElementById("lumpsum-amount").value);
  let r = parseFloat(document.getElementById("lumpsum-rate").value) / 100;
  let t = parseFloat(document.getElementById("lumpsum-time").value);
  let amount = p * Math.pow(1 + r, t);
  showResult("lumpsum-result", `Future Value: ${amount.toFixed(2)}`);
}


function calculateStepUpSIP() {
  // Get user inputs
  let a = parseFloat(document.getElementById("step-up-sip-amount").value);          // Monthly investment
  let rate = parseFloat(document.getElementById("step-up-sip-rate").value) / 1200;  // Monthly rate
  let years = parseFloat(document.getElementById("step-up-sip-time").value);        // Total years
  let increment = parseFloat(document.getElementById("step-up-sip-increment").value) / 100; // Annual increment
  
  let total = 0;

  // Loop for each year separately
  for (let y = 0; y < years; y++) {
    let monthlyInvestment = a * Math.pow(1 + increment, y);  // increment for this year
    let monthsInvested = 12;                                 // each year's contributions last 12 months
    let futureValueOfThisYear = monthlyInvestment * ((Math.pow(1 + rate, monthsInvested) - 1) / rate) * (1 + rate);

    // Months remaining after this year's contributions end
    let monthsRemaining = (years - y - 1) * 12;
    let futureValueAtEnd = futureValueOfThisYear * Math.pow(1 + rate, monthsRemaining); 

    total += futureValueAtEnd;
  }

  // Display the result
  let formattedTotal = total.toFixed(2);
  document.getElementById("step-up-sip-result").innerText = `Maturity Value: ${formattedTotal}`;
}



function calculateLumpsumTopup() {
  let P = parseFloat(document.getElementById("lumpsum-principal").value);
  let rate = parseFloat(document.getElementById("lumpsum-rate").value) / 100;
  let totalYears = parseFloat(document.getElementById("lumpsum-time").value);

  let topUps = [
    {amount: parseFloat(document.getElementById("topup-amount1").value) || 0, year: parseFloat(document.getElementById("topup-year1").value) || 0},
    {amount: parseFloat(document.getElementById("topup-amount2").value) || 0, year: parseFloat(document.getElementById("topup-year2").value) || 0},
    {amount: parseFloat(document.getElementById("topup-amount3").value) || 0, year: parseFloat(document.getElementById("topup-year3").value) || 0}
  ];
  
  let total = P * Math.pow(1 + rate, totalYears); // lumpsum future value
  for (let t of topUps) {
    if (t.amount > 0 && t.year >= 0 && t.year <= totalYears) {
      let remainingYears = totalYears - t.year;
      total += t.amount * Math.pow(1 + rate, remainingYears);
    }
  }

  document.getElementById("lumpsum-topup-result").innerText = `Future Value: ${total.toFixed(2)}`;
}

function calculateEPF401k() {
  let emp = parseFloat(document.getElementById("epf-401k-employee").value);
  let employer = parseFloat(document.getElementById("epf-401k-employer").value);
  let rate = parseFloat(document.getElementById("epf-401k-rate").value) / 1200;
  let years = parseFloat(document.getElementById("epf-401k-years").value);
  let totalMonths = years * 12;
  let total = (emp + employer) * ((Math.pow(1 + rate, totalMonths) - 1) / rate) * (1 + rate);
  document.getElementById("epf-401k-result").innerText = `Estimated Corpus: ${total.toFixed(2)}`;
}

function calculatePPFIRA() {
  let annual = parseFloat(document.getElementById("ppf-ira-annual").value);
  let rate = parseFloat(document.getElementById("ppf-ira-rate").value) / 100;
  let years = parseFloat(document.getElementById("ppf-ira-years").value);

  // End-of-year contributions formula:
  let total = annual * ((Math.pow(1 + rate, years) - 1) / rate);

  document.getElementById("ppf-ira-result").innerText = `Estimated Corpus: ${total.toFixed(2)}`;
}


function calculateLumpsumVsSIP() {
  let sipAmount = parseFloat(document.getElementById("ls-vs-sip-amount").value);
  let lumpsum = parseFloat(document.getElementById("ls-vs-sip-lumpsum").value);
  let rate = parseFloat(document.getElementById("ls-vs-sip-rate").value) / 1200;
  let years = parseFloat(document.getElementById("ls-vs-sip-years").value);
  let n = years * 12;
  let sipFuture = sipAmount * ((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate);
  let lumpsumFuture = lumpsum * Math.pow(1 + rate * 12, years); // approximate
  document.getElementById("ls-vs-sip-result").innerText = 
    `SIP Future Value: ${sipFuture.toFixed(2)}, Lumpsum Future Value: ${lumpsumFuture.toFixed(2)}`;
}

function calculateDRIP() {
  let P = parseFloat(document.getElementById("drip-principal").value);
  let divYield = parseFloat(document.getElementById("drip-dividend").value) / 100;
  let growth = parseFloat(document.getElementById("drip-growth").value) / 100;
  let years = parseFloat(document.getElementById("drip-years").value);

  let total = P;
  for (let i = 0; i < years; i++) {
    let div = total * divYield;
    total += div;
    total *= (1 + growth); // then grow price
  }
  document.getElementById("drip-result").innerText = `Estimated Value after ${years} years: ${total.toFixed(2)}`;
}

function calculateLoanEMI() {
  let p = parseFloat(document.getElementById("loan-principal").value);
  let r = parseFloat(document.getElementById("loan-rate").value) / 1200;
  let n = parseFloat(document.getElementById("loan-time").value) * 12;
  if(r === 0) {
    let emi = p / n;
    showResult("loan-result", `EMI: ${emi.toFixed(2)}`);
    return;
  }
  let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  showResult("loan-result", `EMI: ${emi.toFixed(2)}`);
}

function calculateBalanceTransfer() {
  function calculateEMI(P, annualRate, years) {
    let r = annualRate / 12; // monthly interest rate (decimal)
    let n = years * 12; // total number of monthly payments
    if (r === 0) return P / n; // handle zero interest rate edge case
    return P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  let oldP = parseFloat(document.getElementById("old-principal").value);
  let oldR = parseFloat(document.getElementById("old-rate").value) / 100;
  let oldT = parseFloat(document.getElementById("old-time").value);
  let newR = parseFloat(document.getElementById("new-rate").value) / 100;
  let newT = parseFloat(document.getElementById("new-time").value);

  if (oldP <= 0 || oldR < 0 || oldT <= 0 || newR < 0 || newT <= 0) {
    showResult("balance-transfer-result", "Please enter valid inputs.");
    return;
  }

  let oldEMI = calculateEMI(oldP, oldR, oldT);
  let newEMI = calculateEMI(oldP, newR, newT);

  let totalOldPayment = oldEMI * oldT * 12;
  let totalNewPayment = newEMI * newT * 12;

  let interestOld = totalOldPayment - oldP;
  let interestNew = totalNewPayment - oldP;

  let savings = interestOld - interestNew;
  let monthlySavings = oldEMI - newEMI;

  showResult("balance-transfer-result", 
    `Approximate Interest Savings: ${savings.toFixed(2)}\nMonthly EMI Savings: ${monthlySavings.toFixed(2)}`
  );
}


function calculateAmortization() {
  let p = parseFloat(document.getElementById("amort-principal").value);
  let r = parseFloat(document.getElementById("amort-rate").value) / 1200;
  let n = parseFloat(document.getElementById("amort-time").value) * 12;
  let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // Display a brief amortization summary (total paid, interest paid)
  let totalPayment = emi * n;
  let interestPaid = totalPayment - p;

  showResult("amort-result", `EMI: ${emi.toFixed(2)}\nTotal Payment: ${totalPayment.toFixed(2)}\nTotal Interest Paid: ${interestPaid.toFixed(2)}`);
}

function calculateMortgage() {
  let principal = parseFloat(document.getElementById("mortgage-principal").value);
  let annualRate = parseFloat(document.getElementById("mortgage-rate").value);
  let years = parseFloat(document.getElementById("mortgage-time").value);

  if (principal <= 0 || annualRate < 0 || years <= 0) {
    showResult("mortgage-result", "Please enter valid inputs.");
    return;
  }

  let monthlyRate = annualRate / 12 / 100;
  let numPayments = years * 12;

  let emi;
  if (monthlyRate === 0) {
    emi = principal / numPayments;
  } else {
    emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  let totalPayment = emi * numPayments;
  let totalInterest = totalPayment - principal;

  showResult("mortgage-result", 
    `Monthly Payment: ${emi.toFixed(2)}\nTotal Payment: ${totalPayment.toFixed(2)}\nTotal Interest: ${totalInterest.toFixed(2)}`
  );
}

function calculateCreditCardPayoff() {
  let balance = parseFloat(document.getElementById("cc-balance").value);
  let rate = parseFloat(document.getElementById("cc-rate").value) / 1200; // monthly rate
  let payment = parseFloat(document.getElementById("cc-payment").value);

  if (payment <= balance * rate) {
    document.getElementById("cc-result").innerText = "Monthly payment too low to pay off balance.";
    return;
  }

  let months = 0;
  let totalInterest = 0;
  let currBalance = balance;

  while (currBalance > 0) {
    let interest = currBalance * rate;
    totalInterest += interest;
    currBalance = currBalance + interest - payment;
    months++;
  }

  let years = (months / 12).toFixed(1);
  document.getElementById("cc-result").innerText = 
    `Time to pay off: ${months} months (~${years} years), Total Interest: ${totalInterest.toFixed(2)}`;
}

function calculateHomeAffordability() {
  let income = parseFloat(document.getElementById("ha-income").value);
  let down = parseFloat(document.getElementById("ha-downpayment").value);
  let rate = parseFloat(document.getElementById("ha-rate").value) / 1200;
  let years = parseFloat(document.getElementById("ha-term").value);
  
  let monthlyIncome = income / 12;
  let affordablePayment = monthlyIncome * 0.28; // 28% of income guideline
  
  let numPayments = years * 12;
  let loanAmount = affordablePayment * (1 - Math.pow(1 + rate, -numPayments)) / rate;
  let homePrice = loanAmount + down;

  document.getElementById("ha-result").innerText = `You can afford a home priced around: ${homePrice.toFixed(2)}`;
}


function calculateRetirement() {
  let currentAge = parseFloat(document.getElementById("retire-current-age").value);
  let retireAge = parseFloat(document.getElementById("retire-retire-age").value);
  let expenses = parseFloat(document.getElementById("retire-expenses").value);
  let inflation = parseFloat(document.getElementById("retire-inflation").value) / 100;
  let returnRate = parseFloat(document.getElementById("retire-return").value) / 100;

  let yearsLeft = retireAge - currentAge;
  if (yearsLeft <= 0) {
    showResult("retirement-result", "Retirement age must be greater than current age.");
    return;
  }
  // Adjust expenses for inflation over yearsLeft
  let futureExpenses = expenses * Math.pow(1 + inflation, yearsLeft);

  // Using annuity formula to find corpus needed:
  // Corpus = FutureExpenses * (1 - (1 + r)^-n) / r, assuming 20 years retirement
  let retirementYears = 20;
  let corpus = futureExpenses * ((1 - Math.pow(1 + returnRate, -retirementYears)) / returnRate) * 12;

  showResult("retirement-result", `Corpus Needed at Retirement: ${corpus.toFixed(2)}`);
}

function calculateInflation() {
  let amount = parseFloat(document.getElementById("inflation-amount").value);
  let rate = parseFloat(document.getElementById("inflation-rate").value) / 100;
  let years = parseFloat(document.getElementById("inflation-years").value);

  let futureValue = amount * Math.pow(1 + rate, years);
  showResult("inflation-result", `Amount needed after ${years} years: ${futureValue.toFixed(2)}`);
}

function calculateEducation() {
  let currentCost = parseFloat(document.getElementById("edu-current-cost").value);
  let inflation = parseFloat(document.getElementById("edu-inflation").value) / 100;
  let years = parseFloat(document.getElementById("edu-years").value);
  let returnRate = parseFloat(document.getElementById("edu-return").value) / 100;

  let futureCost = currentCost * Math.pow(1 + inflation, years);

  // Calculate required lumpsum investment to meet future cost
  let lumpsum = futureCost / Math.pow(1 + returnRate, years);

  showResult("education-result", `Future Education Cost: ${futureCost.toFixed(2)}\nRequired Investment Today: ${lumpsum.toFixed(2)}`);
}

function calculateMIS() {
  let p = parseFloat(document.getElementById("mis-principal").value);
  let r = parseFloat(document.getElementById("mis-rate").value) / 100;
  let t = parseFloat(document.getElementById("mis-time").value);

  // Interest payout monthly = Principal * rate / 12
  let monthlyIncome = (p * r) / 12;

  showResult("mis-result", `Monthly Income: ${monthlyIncome.toFixed(2)}`);
}

function calculateGratuity() {
  let salary = parseFloat(document.getElementById("gratuity-salary").value);
  let years = parseFloat(document.getElementById("gratuity-years").value);

  // Gratuity = (Last Salary * 15/26) * years of service (typical formula)
  let gratuity = (salary * 15 / 26) * years;

  showResult("gratuity-result", `Gratuity Amount: ${gratuity.toFixed(2)}`);
}

function calculateLeaveEncashment() {
  let days = parseFloat(document.getElementById("leave-days").value);
  let rate = parseFloat(document.getElementById("leave-daily-rate").value);
  let total = days * rate;
  document.getElementById("leave-encashment-result").innerText = `Encashment Amount: ${total.toFixed(2)}`;
}

function calculateEmergencyFund() {
  let expenses = parseFloat(document.getElementById("monthly-expenses").value);
  let months = parseFloat(document.getElementById("months").value);
  let total = expenses * months;
  document.getElementById("emergency-fund-result").innerText = `Recommended Emergency Fund: ${total.toFixed(2)}`;
}

function calculateNetWorth() {
  let assets = document.getElementById("assets-list").value.split(",").map(Number).filter(n => !isNaN(n));
  let liabilities = document.getElementById("liabilities-list").value.split(",").map(Number).filter(n => !isNaN(n));
  let totalAssets = assets.reduce((a,b)=>a+b, 0);
  let totalLiabilities = liabilities.reduce((a,b)=>a+b, 0);
  let netWorth = totalAssets - totalLiabilities;
  document.getElementById("net-worth-result").innerText = `Your Net Worth: ${netWorth.toFixed(2)}`;
}

function calculateRuleOf72() {
  let rate = parseFloat(document.getElementById("interest-rate").value);
  let years = 72 / rate;
  document.getElementById("rule-of-72-result").innerText = `Your money will double in approximately ${years.toFixed(1)} years`;
}

function calculateRetirementCorpus() {
  let target = parseFloat(document.getElementById("target-corpus").value);
  let rate = parseFloat(document.getElementById("retirement-rate").value) / 1200;
  let years = parseFloat(document.getElementById("retirement-years").value) * 12;
  
  let monthlyInvestment = target / ((Math.pow(1 + rate, years) - 1) / rate * (1 + rate));
  document.getElementById("retirement-corpus-result").innerText = `You need to invest approximately ${monthlyInvestment.toFixed(2)} per month.`;
}

function showResult(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerText = text;
}


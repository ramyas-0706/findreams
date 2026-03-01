import { useState } from "react";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const EMICalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(24);

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1)
      : amount / tenure;
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  return (
    <div className="luxury-card rounded-2xl p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06]">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold">EMI Calculator</h3>
      </div>

      <div className="space-y-8">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-silver">Loan Amount</label>
            <span className="text-primary font-semibold">₹{amount.toLocaleString("en-IN")}</span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={([v]) => setAmount(v)}
            min={50000}
            max={10000000}
            step={50000}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹50K</span>
            <span>₹1 Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-silver">Interest Rate (p.a.)</label>
            <span className="text-primary font-semibold">{rate}%</span>
          </div>
          <Slider
            value={[rate]}
            onValueChange={([v]) => setRate(v)}
            min={5}
            max={25}
            step={0.5}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>5%</span>
            <span>25%</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-silver">Tenure (months)</label>
            <span className="text-primary font-semibold">{tenure} months</span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={([v]) => setTenure(v)}
            min={6}
            max={360}
            step={6}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>6 mo</span>
            <span>30 yr</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/30">
        <div className="text-center">
          <p className="text-xs text-silver mb-1">Monthly EMI</p>
          <p className="font-display text-xl md:text-2xl font-bold gold-gradient-text">
            ₹{Math.round(emi).toLocaleString("en-IN")}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-silver mb-1">Total Interest</p>
          <p className="font-display text-xl md:text-2xl font-bold text-silver">
            ₹{Math.round(totalInterest).toLocaleString("en-IN")}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-silver mb-1">Total Payment</p>
          <p className="font-display text-xl md:text-2xl font-bold text-foreground">
            ₹{Math.round(totalPayment).toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;

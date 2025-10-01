import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../../store/slices/counterSlice";
import { useTheme } from "../../../hooks/useTheme";
import { useInjectReducer } from "../../../hooks/useInjectReducer";
import counterReducer from "../../../store/slices/counterSlice";
import CardSection from "../../shared/CardSection";
import { useContent } from "../../../hooks/useContent";
import type { HomepageContent } from "../../../contents/_base/homepage";

function Counter() {
  useInjectReducer("counter", counterReducer);
  const { colors } = useTheme();
  const content = useContent<HomepageContent>().counter;
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter?.value ?? 0);
  const [incrementValue, setIncrementValue] = useState(5);

  return (
    <CardSection>
      <div className="text-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{content?.title}</h2>
          <p className="opacity-80">
            {content?.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="text-7xl font-bold py-6 px-10 rounded-2xl inline-block"
                style={{
                  background: colors.bg,
                  color: colors.primary,
                  boxShadow: `inset 0 4px 12px ${colors.shadow}10`,
                }}
              >
                {count}
              </div>
              <div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse"
                style={{ background: colors.primary }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => dispatch(decrement())}
              className="px-6 py-3 rounded-xl font-semibold shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: `linear-gradient(145deg, ${colors.gradients.danger[0]}, ${colors.gradients.danger[1]})`,
                color: "white",
              }}
            >
              {content?.decreaseButtonText}
            </button>

            <button
              onClick={() => dispatch(increment())}
              className="px-6 py-3 rounded-xl font-semibold shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: `linear-gradient(145deg, ${colors.gradients.success[0]}, ${colors.gradients.success[1]})`,
                color: "white",
              }}
            >
              {content?.increaseButtonText}
            </button>
          </div>

          <div className="pt-6 border-t" style={{ borderColor: colors.border }}>
            <div className="flex flex-col items-center space-y-4">
              <label
                htmlFor="customAmount"
                className="font-medium flex items-center gap-2"
              >
                {content?.customAmountLabel}
              </label>
              <div className="flex gap-2 w-full max-w-xs">
                <input
                  id="customAmount"
                  type="number"
                  value={incrementValue}
                  onChange={(e) => setIncrementValue(Number(e.target.value))}
                  className="px-4 py-2 rounded-xl border flex-1 text-center"
                  style={{
                    background: colors.backgrounds.input,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                />
                <button
                  onClick={() => dispatch(incrementByAmount(incrementValue))}
                  className="px-4 py-2 rounded-xl font-semibold shadow-md transition-all hover:scale-105 flex items-center gap-1"
                  style={{
                    background: `linear-gradient(145deg, ${colors.gradients.primary[0]}, ${colors.gradients.primary[1]})`,
                    color: "white",
                  }}
                >
                  {content?.addAmountButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}

export default Counter;

import React from "react";

export const EX2_Calculation = () => {
  const add = (a: number, b: number): number => a + b;
  const subtract = (a: number, b: number): number => a - b;
  const multiply = (a: number, b: number): number => a * b;
  const divide = (a: number, b: number): number => (b !== 0 ? a / b : NaN);
  const a = 10;
  const b = 5;
  return (
        <div style={{ padding: "20px" }}>
      <h2>Bài tập EX2 - Calculation</h2>
      <p>
        <strong>Cộng:</strong> {a} + {b} = {add(a, b)}
      </p>
      <p>
        <strong>Trừ:</strong> {a} - {b} = {subtract(a, b)}
      </p>
      <p>
        <strong>Nhân:</strong> {a} × {b} = {multiply(a, b)}
      </p>
      <p>
        <strong>Chia:</strong> {a} ÷ {b} = {divide(a, b)}
      </p>
    </div>
  )
}
export default EX2_Calculation;
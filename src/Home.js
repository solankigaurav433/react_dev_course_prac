import React from "react";
import car from "./car.png";

export function Home() {
  const [feedback, setFeedback] = React.useState("Okok");
  return (
    <div>
      <header>
        <h1> Gaurav's Garage</h1>
      </header>
      <section>
        <p>We provide fabulous service to our customers! </p>
        <img
          src="https://github.com/solankigaurav433.png"
          height={200}
          width={200}
          alt="Gaurav Solanki"
        />
        <img src={car} alt="ford mustang" height={200} width={200} />
        
      </section>
      <p>Customer feedback: {feedback}</p>
      <button onClick={() => setFeedback("Okok")}>OKok service</button>
      <br />
      <button onClick={() => setFeedback("Good")}>Good service</button>
      <br />
      <button onClick={() => setFeedback("Bad")}>Bad service</button>
      <br />
      <footer>
        <h4>
          <small>&copy; 2021 Copyrights reserved</small>
        </h4>
      </footer>
    </div>
  );
}



import React from "react";
import people from '../images/people.png'

export default function Main() {
  return (
    <div>
      <main>
        <div className="flex p-20">
        <section>
        <div>
          <h1 className="text-5xl py-10 font-bold">Ready for Change?</h1>
          <p>
            Wannabee is an ever-growing hive, and we are always looking for
            brilliant people to join our team. We want to hear from you if you
            have a strong passion for digital marketing and want to join a
            thriving team of professionals.
          </p>
          <h1 className="text-5xl py-10 font-bold">Wannabee perks</h1>
          <ul className="list-inside list-disc">
            <li>Market competative salary</li> 
            <li>Balanced work life</li>
            <li>Employee training program</li>   
            <li>Paid time off</li>   
            <li>Healthy work environment</li>   
            <li>Completely remote</li>
          </ul>
        </div>
        </section>
        <section>
        <img src={people} alt="people"></img>
        </section>
        </div>
        <div className="flex justify-center items-center py-20">
            <h1 className="text-center text-3xl bg-custom-yellow w-50 px-5 py-1">Currently no jobs Available</h1>
        </div>
      </main>
    </div>
  );
}

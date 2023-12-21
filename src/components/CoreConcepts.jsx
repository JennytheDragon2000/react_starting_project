import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data-with-examples.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

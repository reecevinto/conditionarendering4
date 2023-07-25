import "./styles.css";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}
export default function PackingList() {
  return (
    <section>
      <h1>Packing List</h1>
      <Item isPacked={true} name="Dog" />
      <Item Ispacked={true} name="Camping Truck" />
      <Item isPacked={false} name="Girlfriend" />
    </section>
  );
}

import "./category.css";
function Category() {
  return (
    <section className="category">
      <div className="category-name">
        <button className="button-style">All</button>
        <button className="button-style">Commercial</button>
        <button className="button-style">Music videos</button>
        <button className="button-style">Corporate</button>
        <button className="button-style">Event</button>
        <button className="button-style">3D</button>
        <button className="button-style">Documentary</button>
      </div>
    </section>
  );
}
export default Category;

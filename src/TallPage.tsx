export function TallPage(props: { color?: string }) {
  return (
    <div
      style={{ height: "120vh", backgroundColor: props.color || "#ccc" }}
    ></div>
  );
}

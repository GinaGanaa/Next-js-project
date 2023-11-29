export const Todo = (props) => {
  const { data } = props;

  return (
    <div>
      {data.id}.{data.name}
    </div>
  );
};

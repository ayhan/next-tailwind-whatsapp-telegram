export const ChatCard = (props) => {
  const { data } = props;
  return (
    <div className="grid grid-cols-5 p-2 cursor-pointer hover:bg-wp-secondary-300">
      <div className="col-span-1">
        <img src={data.img} alt={data.name} className="rounded-full w-15" />
      </div>
      <div className="col-span-4 border-b border-wp-secondary-100">
        <div className="flex justify-between border-wp-secondary-100">
          <h2 className="text-wp-white-100">{data.name}</h2>
          <p className="text-xs text-wp-white-200">{data.date}</p>
        </div>
        <div className="flex justify-between text-right border-wp-secondary-100">
          <p className="text-xs text-wp-white-200">{data.message}</p>
          <div className="w-5 h-5 text-sm text-center rounded-full text-wp-secondary-200 bg-wp-primary">
            <p>
              8
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;

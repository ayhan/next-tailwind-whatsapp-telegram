const Messages = (props) => {
    const { data } = props;
    return (
        <div className={`text-white text-${data.me ? 'right' : 'left'} m-2.5 font-medium text-xs`}>
            <div className={`bg-telegram-${data.me ? 'gray-300' : 'gray-200'} relative inline p-1.5 pl-2.5 pr-12 rounded-md text-white`}>
                {data.message}
                <span className="text-xxs right-1 bottom-0 absolute opacity-60">
                    {data.time} ✓
                </span>
            </div>
        </div>
    )
}

export default Messages;
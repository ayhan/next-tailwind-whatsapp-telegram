const Messages = (props) => {
    const { data } = props;
    return (
        <div className={`text-white text-${data.me ? 'right' : 'left'} m-2.5 font-medium text-sm`}>
            <div className={`bg-wp-${data.me ? 'primary' : 'secondary-100'} relative inline p-1.5 pl-2.5 pr-12 rounded-md text-wp-white-100`}>
                {data.message}
                <span className="text-xxs right-1 bottom-0 absolute opacity-70">
                    {data.time} ✓
                </span>
            </div>
        </div>
    )
}

export default Messages;
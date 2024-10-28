function links(props){
    return(
        <div className="Links flex gap-4 hover:bg-[#f0f5fa] hover:text-[#6c66e9] p-4 items-center">
            <img className="w-[20px]" src={props.route} alt="" />
            <p className='text-[15px]'>{props.desc}</p>
        </div>
    )
}

export default links;
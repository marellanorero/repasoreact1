const Paginado = ({ getCharacters, info }) => {
    return(
        <div className="row">
            <div className="col-md-12 d-flex justify-content-between py-3">
                <button className={"btn btn-primary " + (info?.prev === null ? "disabled": "")} onClick={() => {
                    if(info?.prev !== null){
                        getCharacters(info?.prev)}}}>Prev</button>
                <span className="text-muted" onClick={() => {
                    if(info?.next !== null){
                        getCharacters(info?.next)}}}>
                            <small>Total: {info?.count} Paginas: {info?.pages}</small></span>
                <button className={"btn btn-primary " + (info?.next === null ? "disabled": "")}>Next</button>
            </div>
        </div>
    )
}

export default Paginado;
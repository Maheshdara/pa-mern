import '../../style.css';



const ProductPartNumber = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">


                    <div className="col-lg-12 col-md-9 col-sm-9 col-9">
                        <div class="row text-center">
                            <h4>Product Part Number</h4>

                            <div class="mt-3 d-flex text-center mb-4 productNo">
                                <div class="font18gr ">PA-1706103202617-5A7B7 </div>
                                <div class=""><a href="/catalog/create/part" type="button" id="" class="btn btn-outline-secondary btn-sm pa_customBtn"> Refresh</a></div>
                            </div>

                            <div class="col-sm mb-4 text-center">
                                <a href="/catalog/search/home" type="button" id="" class="btn btn-outline-primary btn-sm pa-customBtn-sm">Search Product</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductPartNumber;






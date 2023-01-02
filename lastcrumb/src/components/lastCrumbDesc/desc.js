import "./desc.css"


const Description = () => {


    return (

        // <div className="container">
            <div className="row w-100">
                <div className="col-6 d-flex justify-content-center">
                    <img src="https://cdn.shopify.com/s/files/1/0496/4224/2208/files/20200627_LastCrumb__AudreyMa_0810_1_720x.jpg?v=1667866038"/>
                    {/* <p>test</p> */}
                </div>


                {/* the box where all the texts go */}
                <div className="col-4 mx-auto text-light">
                    <div className="row">
                        <h2>HANDMADE COOKIES.</h2>
                        <h2>BORN IN LA.</h2>
                        <h2>FRESHLY BAKED TO SHARE.</h2>
                    </div>

                    <div className="row">
                        <p className="w-70 d-flex">
                            It's almost time to trade in your hard-earned dough for a deliciously balanced assortment of cookies.
                            We ship batches exclusively within the USA. Drop your contact info below and we'll hit you up when our bakers start up the ovens.
                        </p>
                    </div>

                    <div className="row">

                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Description;
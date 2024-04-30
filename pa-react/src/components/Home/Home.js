import '../../style.css';

import Categories from '../../SideBar';

const Home = () => {

  return (
    <>
      <div>
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: '300px' }}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image_one" />

              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h2 className="text-uppercase heading_textOne">SUPPORT CENTER</h2>
                  <h1 className="heading_textTwo">PROCURE ANALYTICS</h1>
                  <div className='heading_textThree'>SELF SERVICE PORTAL</div>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '300px' }}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image_two" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h2 className="text-uppercase heading_textOne">SUPPORT CENTER</h2>
                  <h1 className="heading_textTwo">PROCURE ANALYTICS</h1>
                  <div className='heading_textThree'>SELF SERVICE PORTAL</div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-bs-slide="prev">
            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-bs-slide="next">
            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-9 col-md-9 col-sm-9 col-9">

            <div className=" help home-headers"><h5>Support Center Help</h5></div>

            <div className="row mt-2">
              <div className="card  shadow col-sm mx-1 font14 text-center">
                <div className="card-img-top access">
                  <img src='../img/access.jpg' alt='access'/>
                </div>
                <div className="card-body ">
                  <h4 className="card-title  text-center">Access</h4>
                  <h6 className="card-subtitle mb-2 text-muted font14lw text-center">Application Access</h6>
                  <div className="card-text font14">Appropriate permissions are required to access all or parts of the  Support Center.</div>
                  <div className="card-text font14">Management approval required.</div>
                  <a href="mailto:ernest.garner@procureanalytics.com?subject=Support Center Access Request " className="mb-1 btn btn-outline-secondary pa_customBtn text-center">Request Access</a>
                </div>
              </div>

              <div className="card shadow col-sm mx-1 text-center">
                <div className="card-img-top report ">
                <img src='../img/report.jpg' alt='report'/>
                </div>
                <div className="card-body">
                  <h4 className="card-title  text-center">Support</h4>
                  <h6 className="card-subtitle mb-2 text-muted font14lw text-center">Technical Support</h6>
                  <div className="card-text font14 ">For any application or infrastructure issues, use the link below to report any issues.</div>
                  <a href="mailto:engineering@procureanalytics.com?subject=Support Center Application or Infrastructure Issues " className="mb-1 btn btn-outline-secondary pa_customBtn text-center">Report Issue</a>
                </div>
              </div>

              <div className="card shadow col-sm mx-1 text-center">
                <div className="card-img-top ideas ">
                <img src='../img/ideas.jpg' alt='ideas'/>
                </div>
                <div className="card-body">
                  <h4 className="card-title  text-center">Ideas</h4>
                  <h6 className="card-subtitle mb-2 text-muted font14lw text-center">Submit Your Request</h6>
                  <div className="card-text font14 ">Submit any new ideas or enhancements request to existing Application flows.</div>
                  <a href="mailto:engineering@procureanalytics.com?subject=Support Center New Idea " className="mb-1 btn btn-outline-secondary pa_customBtn text-center">Submit Request</a>
                </div>
              </div>
            </div>

            {/* <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: '360px' }}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image_one" />

              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h2 className="text-uppercase heading_textOne">SUPPORT CENTER</h2>
                  <h1 className="heading_textTwo">PROCURE ANALYTICS</h1>
                  <div className='heading_textThree'>SELF SERVICE PORTAL</div>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '360px' }}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image_two" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h2 className="text-uppercase heading_textOne">SUPPORT CENTER</h2>
                  <h1 className="heading_textTwo">PROCURE ANALYTICS</h1>
                  <div className='heading_textThree'>SELF SERVICE PORTAL</div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-bs-slide="prev">
            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-bs-slide="next">
            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div> */}


          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
            {/* <Categories /> */}

            <div className="card col-sm mx-2  mt-5  " style={{border:'0px'}}>
					<div className="card-body mt-2">
						<h6 className="card-title    text-uppercase  ">Applications &amp; Tools</h6>
						<h6 className="card-subtitle font14lw text-muted   ">Other Applications, Systems &amp; Tools.</h6>
						<ul className="list-group list-group-flush font12">
							<li className="list-group-item"><a href="" className="mb-2 link link-outline-primary pa_custom_sidebar">Domo</a></li>
							<li className="list-group-item"><a href="" className="mb-2 link link-outline-primary pa_custom_sidebar">Salesforce</a></li>
							<li className="list-group-item"><a href="" className="mb-2 link link-outline-primary pa_custom_sidebar">NetSuite</a></li>
						</ul>

 				</div>
			</div>

      <div className="card col-sm mx-2  mt-2" style={{border:'0px'}}>
				<div className="card-body mt-2">
					<h6 className="card-title    text-uppercase ">Knowledge Center</h6>
					<h6 className="card-subtitle font14lw text-muted  ">Useful Links &amp; Documentation.</h6>
					<ul className="list-group list-group-flush font12lw">
						<li className="list-group-item"><a href="http://www.amicus-spend.com" className="mb-2 link link-outline-primary  pa_custom_sidebar">Amicus Spend</a> </li>
						<li className="list-group-item"><a href="https://procureanalytics.atlassian.net/wiki/spaces/DA/overview" className="mb-2 link link-outline-primary pa_custom_sidebar">Data &amp; Analytics</a></li>
						<li className="list-group-item"><a href="https://procureanalytics.atlassian.net/wiki/home" className="mb-2 link link-outline-primary  pa_custom_sidebar">Confluence Home</a></li>
					</ul>
				</div>
			</div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home;



import React  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return(
     <>
        <h1 className='text-center text-capitalize my-5'>CARD CONTENT</h1>
        <div className="container text-center">
  <div className="row">

    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/301.jpg" class="card-img-top"  alt='...' height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card 1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/" class="btn btn-primary">Go Image Link</a>
  </div>
</div>
    </div>

    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300?grayscale" class="card-img-top"  alt='...' height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card 2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/" class="btn btn-primary">Go Image Link</a>
  </div>
</div>
    </div>

    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300.jpg" class="card-img-top"  alt='...' height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card 3</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/" class="btn btn-primary">Go Image Link</a>
  </div>
</div>
    </div>

  </div>
</div>
     </>
    )


    };
export default App;

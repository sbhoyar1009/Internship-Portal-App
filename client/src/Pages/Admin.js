import React from 'react';
export default function Admin() {
  return (
  <div>
      <div class="d-flex justify-content-center">
      <div class="card" style={{width: "18rem",margin:"3rem"}}>
  <img class="card-img-top" src="edit.png" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Edit exsisting internships</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./edit-existing-internship" class="btn btn-primary">EDIT</a>
  </div>
</div>
<div class="card" style={{width: "18rem",margin:"3rem"}}>
  <img class="card-img-top" src="post.jpeg" alt="Card image cap" height={220} /> 
  <div class="card-body">
    <h5 class="card-title">Post an internship</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./post-an-internship" class="btn btn-primary">POST</a>
  </div>
</div>
</div>
  </div>
  );
}

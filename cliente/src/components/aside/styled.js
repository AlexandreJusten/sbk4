import styled from 'styled-components';

export const Containner = styled.div`

.sidebar {
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #0f1a2c;
  position: fixed;
  height: 100%;
  overflow: hidden;

}
img{
    margin-top: 10%;
  width: 150px;
  margin-left: 25%;
}
.combo{
    margin-top: 50%;
}
/* Sidebar links */
.sidebar a {
    
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
font-size: 20px;
text-align: center;
margin-top: 5%;
}


/* Active/current link */
.sidebar a.active {
  background-color: rgba(302,302,302,0.1);
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #CACACA;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
 
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}



`
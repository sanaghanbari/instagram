import { Col, Container, Row } from "reactstrap";
import styles from "./Main.module.css"
import PostCard from "./components/PostCard"
import { useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
const Main = () => {

     useEffect(()=>{
      const getdata = async()=>{
        const { data, error } = await supabase.from("posts").select();
        console.log(data);
      };
      
       getdata();
    }, []);

    return(
    <>
    <Container fluid>
        <Row>
            <Col>
            <div className={`${styles.header}`}>My Social</div>
            </Col>
        </Row>
        </Container>
        <Container>
        <Row> 
          
           <Col
      md={{
        offset: 3,
        size: 6
      }}
      sm="12"
    >
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
           </Col>
        </Row>
    </Container>
    </>
   );
 
 };


export default Main;
import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedJob } from "../slice/jobSlice";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  /* const [jobs, setJobs] = useState([]); */
  const jobs = useSelector(state => state.jobSearch.jobSearch)
  const loading = useSelector(state => state.jobSearch.loading)
  const error = useSelector(state => state.jobSearch.error)
/* 
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="; */

  const handleChange = e => {
    setQuery(e.target.value);
  };

/* 
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  console.log(jobs)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-around">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button variant = "info" size="sm" onClick={()=>navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={(e)=> {e.preventDefault(); dispatch(getSearchedJob(query))}}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        { loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>  }

    { error && <Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>}  
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

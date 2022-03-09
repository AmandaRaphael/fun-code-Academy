import { Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div>
      <Form className="mb-3 m-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>
            Your Name <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" required>
          <Form.Label>
            Email address <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Which category are you interested in?</Form.Label>
          <Form.Select>
            <option value="Full-Time Course">Full-Time Course</option>
            <option value="part-Time Course">part-Time Course</option>
            <option value="Kids Course">Kids Course</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQualification">
          <Form.Label>
            Highest qualification of the applicant{" "}
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Qualification" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Age <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the Age of the Applicant"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Courses you would like to learn</Form.Label>
          <Form.Check type="checkbox" label="JavaScript" />
          <Form.Check type="checkbox" label="React" />
          <Form.Check type="checkbox" label="HTML" />
          <Form.Check type="checkbox" label="CSS" />
          <Form.Check type="checkbox" label="Python" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Which category are you interested in?</Form.Label>
          <Form.Select>
            <option value="Full-Time Course">Full-Time Course</option>
            <option value="Part-Time Course">Part-Time Course</option>
            <option value="Kids Course">Kids Course</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactPage;

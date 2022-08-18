import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Post.css';
import Austin from './Austin-logo.png';


class Post extends Component {
    state = {
        urNumber: '',
        surname:'',
        name: '',
        dob: '', 

        pName: '',
        pAddress: '',
        pPhone: '',
        pGender: '',
        pDOB: '',
        pNOK: '',

        rName: '',
        rAddress: '',
        rPhone: '',
        rFax: '',
        rDate: '',
        rConsent: '',


        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6a: '',
        content6b: '',
        content7a: '',
        content7b: '',
        content8: '',
        content9: '',
        content10: '',

        postSubmitted: false
    
    }

    handleChange = ({ target: { value, name}}) => this.setState({ [name]: value })

    //  function for downloading pdf 
    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'pmht.pdf');
          })
      }
    
    // email function here
      sendEmail = async(e) => {
        axios.post('/mail', {
          headers: {
            'Content-type': 'application/json'
          }
        }).then((res) => {
          alert('Form Submitted successfully')
          
        })
      }
    // setting submitting condition 
      submitPost = (e) => {
            
        if(!this.state.urNumber){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }
    
    
      render() {
        return(
         <> { !this.state.postSubmitted ? 
                // bootstrap grid system is used for this form

                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="grid-container">


                        <div className="row">
                            <div className="col">
                            <Card className="cardImage" style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={Austin} />
                                <Card.Body>
                                    
                                      <Card.Text>
                                      <b>Primary Mental Health Team (PMHT)<br></br>                                      
                                       E-Referral Form</b>
                                          </Card.Text>
                                          </Card.Body>
                                          </Card>
                        
                                </div>
                                 <div className="col">
                                  <div className="Patient">

                                  {/* Patient details here */}
                                      <>  
                                      <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label> U.R Number:</Form.Label>
                                        <Form.Control name="urNumber" onChange={this.handleChange} required type="text" placeholder="UR Number"                                  
                                        /></Form.Group>
                                        
                                        
                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Family Name:</Form.Label>
                                        <Form.Control name="surname" onChange={this.handleChange} required type="text" placeholder="Surname"                                  
                                        /></Form.Group>
                                        
                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Given Name:</Form.Label>
                                        <Form.Control name="name" onChange={this.handleChange} type="text" placeholder="Given Name"                                  
                                        /></Form.Group>

                                        <Form.Group  className="P-label"md="4" controlId="validationCustom01">
                                        <Form.Label >Date of Birth:</Form.Label>
                                        <Form.Control name="dob" onChange={this.handleChange} type="text" placeholder="Date of Birth"                                  
                                        /></Form.Group>                         

                                    </></div>
                                     </div>
                                     </div>
                                     
                                     <div className="row">
                                         <div className="col">
                                             <div className="Paragraph">
                                             <p><b> PMHT provides non-urgent assessments for patients residing in Banyule or Nillumbik regions.<br></br>
                                                        Wait times for appointments are up to 2 weeks.<br></br>
                                                        E-referral inbox is checked once per week only (Tuesdays). <br></br>
                                                        For more urgent assessments (including for acute risk or crisis assessment) call NEAMHS Triage 1300-859-789  
                                                 <br></br>**E-referrals will only be ACCEPTED if entire form is complete** </b> </p>
                                               </div>
                                               </div>
                                               </div>

                                                    {/* for this row, table content is applied. 
                                                    This grid has two column.
                                                    Below column cointain one table*/}

                                                <div className="row">
                                                <div className="col">   
                                                <div className="Patient">


                                                            {/* Patient details here */}
   
                                                     <>     
                                                    <table className="table">
                                                    <thead>
                                                    <tr>
                                                    <th scope="col">Personal Details</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                    <th scope="row">
                                                    
                                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                                        <Form.Control   name="pName" onChange={this.handleChange} type="name" placeholder="Put your name" />
                                                        </FloatingLabel> 

                                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                                        <Form.Control name="pEmail" onChange={this.handleChange} type="email" placeholder="Place your email address" />
                                                        </FloatingLabel>   

                                                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                                        <Form.Control name="pPhone" onChange={this.handleChange} type="phone" placeholder="put your phone number" />
                                                        </FloatingLabel> 
                                                        
                                                        
                                                        <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                                                        <Form.Control name="pGender" onChange={this.handleChange} type="text" placeholder="Gender" />                                                        
                                                     </FloatingLabel><br></br>
                                                        

                                                        <FloatingLabel controlId="floatingInput" label="Date of Birth" className="mb-3">
                                                        <Form.Control name="pDOB" onChange={this.handleChange} type="dob" placeholder="date of birth" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="NOK" className="mb-3">
                                                        <Form.Control name="pNOK" onChange={this.handleChange} type="NOK" placeholder="place your nok" />
                                                        </FloatingLabel>
                                                        </th>
                                                               
                                
                                                    </tr>                                              
                                                    </tbody>
                                                    </table> </>
                                                    </div>
                                                    </div>
                                                    


                                                    
                                                    {/* This grid has another table content.
                                                    Referral details are here. */}
                                                        
                                                <div className="col">
                                                <div className="Patient">    
                                                    <table className="table">
                                                    <thead>
                                                    <tr>
                                                    <th scope="col">Referral Details</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                    <th scope="row">
                                                    
                                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                                        <Form.Control name="rName" onChange={this.handleChange} type="name" placeholder="Put your name" />
                                                        </FloatingLabel>
      
                                                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                                                        <Form.Control name="rAddress" onChange={this.handleChange}  type="address" placeholder="Place your address here" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                                        <Form.Control name="rPhone" onChange={this.handleChange}type="phone" placeholder="phone number" />
                                                        </FloatingLabel>


                                                        <FloatingLabel controlId="floatingInput" label="Fax" className="mb-3">
                                                        <Form.Control name="rFax" onChange={this.handleChange} type="fax" placeholder="fax" />
                                                        </FloatingLabel>


                                                        <FloatingLabel controlId="floatingInput" label="Referral Date" className="mb-3">
                                                        <Form.Control name="rDate" onChange={this.handleChange} type="referral date" placeholder="place your referral date" />
                                                        </FloatingLabel>

                                                        <FloatingLabel controlId="floatingInput" label="Does the client consent to referral (Yes/NO):" className="mb-3">
                                                        <Form.Control name="rConsent" onChange={this.handleChange} type="confirmation" placeholder="yes/no" />
                                                        </FloatingLabel>
                                                    </th>
                                                    </tr>                                              
                                                    </tbody>
                                                    </table> 
                                                    </div>
                                                    </div>
                                                </div>

                                               {/* This is the final Row of the table. */}

                     
                                    <div className="row">
                                    <div className="col" style={{ textalign: 'left' }}>
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">                  
                                            
                                            <fieldset>                                   
                                            

                                            <div className="form-group">
                                                    <label> Presenting Problems: (symptoms, duration, current level of functioning, level of distress, insight)</label>                                                  
                                                    <textarea name="content1" onChange={this.handleChange} className="form-control"  rows="4"></textarea>


                                                
                                                </div><br></br>

                                                <div className="form-group">
                                                    <label>  <b>Reason for Referral: (e.g. diagnostic clarification, review medication, linkages)</b><br></br>
                                                   **Referrals for case management need to be emailed directly to NECCS (referral.ccs@austin.org.au)** </label>                                                  
                                                    <textarea name="content2" onChange={this.handleChange} className="form-control"  rows="4"></textarea>
                                                </div><br></br>

                                                <div className="form-group">
                                                <label><b>Current Risk: (For urgent/acute psychiatric assessment call NEAMHS Triage 1300-859-789)</b><br></br>
                                                To self (including current thoughts, intent and/or plan, previous attempts) </label>                                                  
                                                    <textarea name="content3" onChange={this.handleChange} className="form-control" rows="4"></textarea>
                                                </div><br></br>

                                                <div className="form-group">
                                                <label><b>Current Risk: (For urgent/acute psychiatric assessment call NEAMHS Triage 1300-859-789) </b><br></br>
                                                To others (including current thoughts, intent and/or plan, previous violence/aggression)<br></br>
                                                    *** Please include any risk to health professionals</label>                                                  
                                                    <textarea name="content4" onChange={this.handleChange} className="form-control"  rows="4"></textarea>
                                                </div><br></br>

                                                <div className="form-group">
                                                <label>Medical History (recent investigation results to be attached to the referral)  </label>                                                  
                                                <textarea name="content5" onChange={this.handleChange} className="form-control"  rows="4"></textarea>
                                                </div><br></br>


                                                <div className="form-group">
                                                <label>Drugs & Alcohol (List Substances):</label>                                                  
                                                <div className="checkbox">
                                                       <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        <b>Past Use:</b>
                                                    </label><br></br>
                                                    <textarea name="content6a" onChange={this.handleChange} placeholder="Past Use...." className="textarea"></textarea>
                                                    </div><br></br>
                                                    
                                                       <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        <b>Current Use:</b>
                                                    </label><br></br>
                                                    <textarea name="content6b" onChange={this.handleChange} placeholder="Current Use...." className="textarea" ></textarea>
                                                    </div>
                                                    </div>                                  
                                                     </div><br></br>


                                                     <div className="form-group">                                               
                                                <div className="checkbox">
                                                       <div class="form-check">
                                                    <label>
                                                        <b>Current Medication:</b>
                                                    </label><br></br>
                                                    <textarea name="content7a" onChange={this.handleChange} placeholder="Mention Medication here" className="textarea"></textarea>
                                                    </div><br></br>
                                                    
                                                    <div class="form-check">
                                                    <label>
                                                        <b>Allergies:</b>
                                                    </label><br></br>
                                                    <textarea name="content7b" onChange={this.handleChange} placeholder="Mention Allergies here " className="textarea"></textarea>
                                                    </div></div>
                                                    </div><br></br>


                                                <div className="form-group">
                                                <label>Past psychiatric medications (if known):</label>                                                  
                                                <textarea name="content8" onChange={this.handleChange} className="form-control" rows="4"></textarea>
                                                </div><br></br>

                                                <div className="form-group">
                                                <label textalign="right">Brief Personal History: (Living circumstances, employment, relationships, children)</label>                                                  
                                                <textarea name="content9" onChange={this.handleChange} className="form-control" rows="4"></textarea>
                                                </div><br></br>


                                                <div className="form-group">
                                                <label textalign="right">Other Supports (eg. private psychologist, counsellor, NDIS, Child Protection etc.):</label>                                                  
                                                <textarea name="content10" onChange={this.handleChange} className="form-control"  rows="4"></textarea>
                                                </div><br></br>


                                               
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col" >
                            <div className="submission" >
                                <div className="form-group" >
                                <button onClick={() => {
                                    // this.sendEmail();
                                    this.submitPost();}} className="btn btn-primary btn-lg" > Submit </button>
                                </div>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>) : 

                    // If postsubmitted follows up with the condition then it direct to Thank you page
                    (
        <div className="thankyou" align="center">
        <Card style={{width: '50rem' }}>
  <Card.Body>
    <Card.Title><b>Thank You !</b></Card.Title>
    <Card.Text>
For all urgent/acute psychiatric assessments call NE Triage 1300-859-789.<br></br>
We will contact you with the outcome of this referral.
    </Card.Text>
  
    <Button onClick={this.createAndDownloadPdf} variant="primary">Download the copy</Button>
  </Card.Body>
</Card>

</div>
      )
            } 

        </>        
        );
    }
}

export default Post;




import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Form, Field } from 'react-final-form';
import { Input, TextField, Checkbox, Radio, Select } from 'final-form-material-ui';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const PROGRAM_APPLY = gql`
  mutation programApply(
    $name: String!
    $studentID: String!
    $department: String!
    $phone: String!
    $mobile: String!
    $email: String!
    $address: String!
  ){
    programApply(
      name: $name
      studentID: $studentID
      department: $department
      phone: $phone
      mobile: $mobile
      email: $email
      address: $address
    ) {
      id
      name
      studentID
      department
      phone
      mobile
      email
      address
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const styles = {
  title: {
    textAlign: 'center',
  },
  paper: {
    margin: '200px 0 0 0',
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
  largeinput: {
    width: '100%',
    margin: '50px 0 0 0',
  },
}

const onSubmit = (data, update) => {
    console.log('programData', data)
    update({
      variables: {
        name: data.name,
        studentID: data.studentID,
        department: data.department,
        phone: data.phone,
        mobile: data.mobile,
        email: data.email,
        address: data.address,
      }
    })
  }

const validate = values => {
    const errors ={}
    if (!values.account) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  }


function FormPage2() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed>
        <Paper className={classes.root} style={styles.paper}>
          <Mutation mutation={PROGRAM_APPLY}>
            {update => (
              <Form
                onSubmit={data => onSubmit(data, update)}
                // validate={validate}
                // initialValues={({account: ''})}
                render={({ handleSubmit, form }) => (
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3" 
                          style={styles.title}>
                          國立臺灣大學創意創業學程<br/>
                          核心課程延修申請表
                        </Typography>
                        <Typography variant="h5" component="h3"
                          style={styles.title}>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                          一、申請人資料
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          name="name"
                          component={TextField}
                          style={styles.input}
                          placeholder="姓名"
                        />
                      </Grid>
                      <Grid item justify='center' xs={6}>
                        <Field
                          required
                          name="studentID"
                          component={TextField}
                          style={styles.input}
                          placeholder="學號"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          name="department"
                          component={TextField}
                          style={styles.input}
                          placeholder="系所組別"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          name="department"
                          component={TextField}
                          style={styles.input}
                          placeholder="年級"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          name="mobile"
                          component={TextField}
                          style={styles.input}
                          placeholder="手機"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          name="email"
                          component={TextField}
                          style={styles.input}
                          placeholder="Email"
                        />
                      </Grid>



                      

                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                          二、延修課程
                        </Typography>
                      </Grid>




                      <Grid item xs={6}>
                        <Typography variant="body1" style={{textAlign: 'center'}}>
                          課程名稱
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          上課時間
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          學分
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          授課老師
                        </Typography>
                      </Grid>


                      <Grid item xs={1}>
                          <div>
                            {/* <label>Employed?</label> */}
                            <input type="checkbox" name="employed" />
                            <span id="employed_error" />
                        </div>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body1">
                         創意創意核心課程（一）
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                         星期一789節
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                         3
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                        陳炳宇<br/>林晉玄
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                          <div>
                            {/* <label>Employed?</label> */}
                            <input type="checkbox" name="employed" />
                            <span id="employed_error" />
                        </div>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body1">
                         創意創意專題討論與實踐（一）
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                         星期四AB節
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                         2
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                        陳炳宇<br/>林晉玄
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="body1">
                         申請研修原因
                        </Typography>
                      </Grid>
                  
                      <Grid item xs={11}>
                        <Typography variant="body2" style={{color:"red"}}>
                        （敬請附上相關證明，如：交換學生證明、系所必修衝堂課程大綱等資料，並需於資料上清楚顯示為申請人所有）
                        </Typography>
                        <Field
                          required
                          name="address"
                          component={TextField}
                          style={styles.largeinput}
                          placeholder="相關證明"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="body2" >
                          申請延修保留學程資格截止日期為
                          <span style={{color:"red"}}>
                            108年6月24日（一）下午5點 
                          </span>
                          ，逾時恕不受理，請同學把握時間於辦公時間將紙本申請書繳交至學程辦公室 周孟函
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          申請人: <span style={{width: 90, display: "inline-block"}}/>（簽名）<br/>
                          申請日期：<span style={{width: 16, display: "inline-block"}}/>年<span style={{width: 16, display: "inline-block"}}/>月<span style={{width:16, display: "inline-block"}}/>日
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          敬陳<br/>
                          學程主任：<span style={{width: 90, display: "inline-block"}}/>（簽名）
                        </Typography>
                      </Grid>





                      <Grid item xs={12} container justify="center">
                        <Button variant="contained" className={classes.button} type="submit">
                          列印表單
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              />
            )}
          </Mutation>
        </Paper>
      </Container>
    </Fragment>
  )
}

export default FormPage2;
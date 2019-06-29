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
  paper: {
    margin: '200px 0 0 0',
  },
  input: {
    width: '100%',
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


function FormPage() {
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
                        <Typography variant="h5" component="h3">
                          國立臺灣大學創意創業學程學分證明  申請審核表
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                          一、申請人資料
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
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
                      <Grid item xs={4}>
                        <Field
                          name="phone"
                          component={TextField}
                          style={styles.input}
                          placeholder="電話"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Field
                          required
                          name="mobile"
                          component={TextField}
                          style={styles.input}
                          placeholder="手機"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Field
                          required
                          name="email"
                          component={TextField}
                          style={styles.input}
                          placeholder="Email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          required
                          name="address"
                          component={TextField}
                          style={styles.input}
                          placeholder="聯絡地址"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                          二、歷年修習學程科目及學分表
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                          三、紙本繳交
                        </Typography>
                        <Typography variant="body1" >
                          請繳交中、英文歷年成績單各一份，並請同時於中、英文成績單上以螢光筆標出課程及學分。
                          將申請審核表及中、英文歷年成績單以紙本繳交至創意創業學程辦公室 3366-9814
                        </Typography>
                      </Grid>
                      <Grid item xs={12} container justify="center">
                        <Button variant="contained" className={classes.button} type="submit">
                          提交表單
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

export default FormPage;
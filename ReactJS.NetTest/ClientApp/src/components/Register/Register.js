import React, { useRef, useState } from 'react'
import RegisterService from './RegisterService'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReactCrop from 'react-image-crop'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './Register.css'
import 'react-image-crop/dist/ReactCrop.css'

const LoginField = styled(TextField)({
    '& label.Mui-focused': {
      transition: 'all 0.5s eased',
      color: '#f48700',
      fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
      transition: 'all 0.5s eased',
      borderBottomColor: '#000000',
      fontWeight: 'bold',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#f48700',
      },
      '&:hover fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#FFC75F',
      },
      '&.Mui-focused fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#f48700',
      },
    },
  });

const LoginButton = styled(Button)({
    width: '23vh',
    marginLeft: '12%',
    color: '#000000',
    borderColor: '#000000',
    '&:hover': {
        color: '#000000',
        borderColor: '#000000',
      },
      '&:active': {
        color: '#000000',
        borderColor: '#000000',
      },
      '&:focus': {
        color: '#000000',
        borderColor: '#000000',
      },
  });

  const FileButton = styled(Button)({
    width: '23vh',
    marginLeft: '12%',
    color: '#f48700',
    borderColor: '#f48700',
    '&:hover': {
        color: '#FFC75F',
        borderColor: '#FFC75F',
      },
      '&:active': {
        color: 'f48700',
        borderColor: 'f48700',
      },
      '&:focus': {
        color: 'f48700',
        borderColor: 'f48700',
      },
  });

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const Register = () => {

    const [Name, setName] = useState();

    const [Surname, setSurname] = useState();
    
    const [Email, setEmail] = useState();

    const [Nickname, setNickname] = useState();

    const [Password, setPassword] = useState();

    const [PasswordConfirmation, setPasswordConfirmation] = useState();

    const [Date, setDate] = useState();

    const [Image, setImage] = useState();

    const [crop, setCrop] = useState({
      unit: '%',
      x: 25,
      y: 25,
      width: 50,
      height: 50
    })

    const [open, setOpen] = React.useState(false);

    const [File, setSelectedFile] = useState();

    const [completedCrop, setCompletedCrop] = useState();

    const previewCanvasRef = useRef(null);

    const [imgHeight, setImgHeight] = useState();

    const [imgWidth, setImgWidth] = useState();

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const onSelectFile = async e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }
      const result = await convertBase64(e.target.files[0]);
      setSelectedFile(result);
      e.target.value = '';
      handleClickOpen();
    }

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    // const getCroppedImg = async () => {
    //   try {
    //       const canvas = document.createElement("canvas");
    //       // const scaleX = image.naturalWidth / image.width;
    //       // const scaleY = image.naturalHeight / image.height;
    //       const scaleX = crop.x;
    //       const scaleY = crop.y;
    //       canvas.width = crop.width;
    //       canvas.height = crop.height;
    //       const ctx = canvas.getContext("2d");
    //       ctx.drawImage(
    //           Image,
    //           crop.x * scaleX,
    //           crop.y * scaleY,
    //           crop.width * scaleX,
    //           crop.height * scaleY,
    //           0,
    //           0,
    //           crop.width,
    //           crop.height
    //       );
  
    //       const base64Image = canvas.toDataURL("image/jpeg", 1);
  
    //       setImage(base64Image);
    //       Register();
  
    //   } catch (e) {
    //       console.log("crop the image");
    //   }
    // };

    async function Register()
    {
        // console.log(Name);
        // console.log(Surname);
        // console.log(Email);
        // console.log(Nickname);
        // console.log(Password);
        // console.log(PasswordConfirmation);
        // console.log(Date);
        // console.log(Image);
        RegisterService.userRegister({Name, Surname, Email, Nickname, Password, PasswordConfirmation, Date, Image});
    }

    async function populateWeatherData(){
      const response = await fetch('weatherforecast/example');
      const data = await response.json();
      // this.setState({ forecasts: data, loading: false });
    }
    
    return (
        <div className='background'>
            <div className='register-form'>
                <div className='form-section'>
                    <div style={{display : 'inline-block'}}>
                        <LoginField onChange={(nameValue) => setName(nameValue.target.value)} label="Name" variant="outlined" />
                    </div>
                    <div style={{display : 'inline-block', marginLeft: '10%'}}>
                        <LoginField onChange={(surnameValue) => setSurname(surnameValue.target.value)} label="Surname" variant="outlined" />
                    </div>
                </div>
                <div className='form-section'>
                    <div style={{display : 'inline-block'}}>
                        <LoginField onChange={(emailValue) => setEmail(emailValue.target.value)} label="Email" variant="outlined" />
                    </div>
                    <div style={{display : 'inline-block', marginLeft: '10%'}}>
                        <LoginField onChange={(nicknameValue) => setNickname(nicknameValue.target.value)} label="Nickname" variant="outlined" />
                    </div>
                </div>
                <div className='form-section'>
                    <div style={{display : 'inline-block'}}>
                        <LoginField type="password" onChange={(passwordValue) => setPassword(passwordValue.target.value)} label="Password" variant="outlined" />
                    </div>
                    <div style={{display : 'inline-block', marginLeft: '10%'}}>
                        <LoginField type="password" onChange={(PasswordConfirmation) => setPasswordConfirmation(PasswordConfirmation.target.value)} label="Password confirm" variant="outlined" />
                    </div>
                </div>
                <div className='form-section'>
                  <div style={{display : 'inline-block'}}>
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker sx={{
                              width: '28vh',
                              "& .MuiSvgIcon-root": {color: '#f48700'},
                              "& .MuiInputLabel-shrink": {color: '#f48700', fontWeight: 'bold'},
                              "& .MuiOutlinedInput-root": {
                                '& fieldset': {
                                  transition: 'all 0.5s eased',
                                  borderColor: '#f48700',
                                },
                                '&:hover fieldset': {
                                  transition: 'all 0.5s eased',
                                  borderColor: '#FFC75F',
                                },
                                '&.Mui-focused fieldset': {
                                  transition: 'all 0.5s eased',
                                  borderColor: '#f48700',
                                }},
                              }} label="Date" onChange={(dateValue) => setDate(dateValue.toDate())}/>
                      </LocalizationProvider>
                    </div>
                    <div style={{display : 'inline-block', marginLeft: '10%'}}>
                      <label htmlFor="upload-photo">
                        <input
                          style={{ display: 'none' }}
                          name="upload-photo"
                          type="file"
                          id="upload-photo"
                          accept="image/*"
                          onChange={onSelectFile}
                        />
                        <FileButton style={{marginTop: '13%'}} variant="outlined" component="span">
                          Pick photo
                        </FileButton>
                      </label>
                    </div>
                </div>
                <div style={{marginLeft: '20%'}} className='form-section'>
                  <div>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <ReactCrop 
                       circularCrop={true}
                       ruleOfThirds={true}
                       aspect={1}
                       crop={crop} 
                       onChange={c => setCrop(c)}>
                        <img src={File} onLoad={() => setImage(File)}/>
                      </ReactCrop>
                      <DialogActions>
                        <FileButton style={{marginRight: '5vh'}} onClick={handleClose} variant="outlined" component="span">
                          Cancel
                        </FileButton>
                        <FileButton style={{marginRight: '10vh'}} variant="outlined" component="span">
                          Submit
                        </FileButton>
                      </DialogActions>
                    </BootstrapDialog>
                  </div>
                </div>
                {/* onClick={() => setImage(crop)} */}
                {/* <div style={{marginLeft: '20%'}} className='form-section'>
                  <canvas ref={previewCanvasRef} width={crop.width} height={crop.height} style={{objectFit: 'contain'}}></canvas>
                </div> */}
                <div className='register-button'>
                    <LoginButton variant='outlined' onClick={() => Register()}>Submit</LoginButton>
                </div>
            </div>
        </div>
    )
}

export default Register
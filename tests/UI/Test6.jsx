//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 45 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Problem Title: TailwindCSS & MaterialUI ********************/

//======================= Pre-Requisites ==========================/
//1. Figma account

//======================= Problem Description ==========================/
//For this test, you will be translating a mockup from Figma to html, with MUIv5 and TailwindCSS.

//******************* Solution Requirements ********************/
//1.) Use TailwindCSS.
//2.) Use MUIv5.
//3.) Translate the Figma mockup as best you can.
//4.) Layout must be responsive, mobile first.
//5.)All necessary assets can be found in the public folder.
//6.) Limit your work to this file.

//******************** Tips ********************
//1.) You may export icons and other assets from the provided Figma mockup.
//2.) You can use either function declaration or function expression.
//2.) Some MUIv5 elements may have built in padding and margin.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Container, Typography, Button, TextField } from "@mui/material";
import yay from '../../public/images/yay.svg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DownloadIcon from '@mui/icons-material/Download';
import cashless from '../../public/images/cashless.png';
import transpo from '../../public/images/transpo.png';
import safety from '../../public/images/safety.png';
import pickup from '../../public/images/pickup.png';

export default function Test6Screen() {
  return (
    <Container
      sx={{paddingLeft: 0, paddingRight: 0, paddingBottom: '30px', paddingTop: '71px'}}
    >
      <Box 
        sx={{ marginRight: '12px', marginLeft: '12px', justifyContent: 'center' }}
      >

        <Box
          sx={{
            '@media (min-width: 640px)': {
                display: 'flex',
                flexDirection: 'row-reverse'
            }
          }}
        >
          <Box
            sx={{ backgroundColor: '#EAEDFB', display: 'grid', justifyContent: 'center', borderRadius: '24px', padding: '12px', width: '100%' }}
          >
            <Box
              component="img"
              src={yay}
            />
          </Box>

          <Box
            sx={{ width: '100%', paddingRight: '10%', paddingLeft: '10%' }}
          >
            <Typography
              sx={{ marginTop: '100px', marginBottom: '50px', fontFamily: 'Archivo', color: '#334155', '@media (min-width: 640px)': { fontSize: '24px' } }}
            >
              Drive the nation to a more <Typography component="span" sx={{fontWeight: '700', '@media (min-width: 640px)': { fontSize: '24px' }}}>seamless, convenient mobility</Typography> and <Typography component="span" sx={{fontWeight: '700', '@media (min-width: 640px)': { fontSize: '24px' }}}>efficient logistics</Typography>.
            </Typography>
            <Box
              sx={{
                '@media (min-width: 640px)': {
                    display: 'flex',
                    gap: '15px'
                }
              }}
            >
              <AppButton 
                buttonName='Get The App Now'
                fullWidth
                startIcon={<DownloadIcon sx={{ width: 36, height: 36, '@media (min-width: 640px)': { width: 24, height: 24 } }} />}
                sx={{ fontSize: '18px', height: '75px', backgroundColor: '#182C75', marginBottom: '32px', fontFamily: 'Inter', textTransform: 'capitalize', '@media (min-width: 640px)': { fontSize: '14px', height: '50px' } }}
              />
              <AppButton 
                buttonName='Admin Login'
                variant="outlined"
                fullWidth
                startIcon={<ExitToAppIcon sx={{ width: 36, height: 36, '@media (min-width: 640px)': { width: 24, height: 24 } }} />}
                sx={{ fontSize: '18px', height: '75px', borderColor: '#182C75', color: '#182C75', fontFamily: 'Inter', textTransform: 'capitalize', '@media (min-width: 640px)': { fontSize: '14px', height: '50px' } }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: '80px',
            '@media (min-width: 640px)': {
                display: 'flex',
                gap: '25px'
            }
          }}
        >
          <Box
            sx={{ backgroundColor: '#CCD5F5', padding: '20', borderRadius: '24px', '@media (max-width: 640px)': { display: 'none' } }}
          >
            <Box
              component="img"
              src={pickup}
              sx={{ width: '546px' }}
            />
          </Box>

          <Box
            sx={{ backgroundColor: '#F1F5F9', padding: '70px 20px 60px 30px', borderRadius: '24px', alignContent: 'center' }}
          >
            <Typography sx={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '700', color: '#334155', marginBottom: '20px', '@media (min-width: 640px)': { fontSize: '45px' } }}>
              Pick Up and Delivery
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', '@media (min-width: 640px)': { fontSize: '15px' } }}>
              Taking good control of the delivery process in order to make sure that the parcel is delivered to you on time.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            '@media (min-width: 640px)': {
              display: 'flex',
              gap: '25px'
            }
          }}
        >
          <Box
            sx={{ backgroundColor: '#F1F5F9', padding: '70px 20px 60px 20px', borderRadius: '24px', marginTop: '24px', display: 'flex', flexDirection: 'row', width: '100%' }}
          >
            <Box
              component="img"
              src={cashless}
              sx={{ width: '102.36px', marginRight: '12px', '@media (min-width: 640px)': { width: '283px' } }}
            />
            <Box
              sx={{
                alignContent: 'center'
              }}
            >
              <Typography sx={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '700', color: '#334155', marginBottom: '20px', '@media (min-width: 640px)': { fontSize: '50px', lineHeight: '1.1' } }}>
                Cashless Payments
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', '@media (min-width: 640px)': { fontSize: '20px' } }}>
                Hassle-free experience by using a cashless payment through Gcash.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ backgroundImage: 'linear-gradient(-180deg, #fff 60%, #304D23 134%)', width: '100%', padding: '40px 20px 0px 20px', borderRadius: '24px', marginTop: '24px', display: 'ruby-text', '@media (min-width: 640px)': { display: 'grid', alignItems: 'center', justifyItems: 'center' } }}
          >
            <Typography sx={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '700', color: '#334155', marginBottom: '20px', '@media (min-width: 640px)': { fontSize: '40px' } }}>
              Transportation
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', textAlign: 'center', '@media (min-width: 640px)': { fontSize: '18px' } }}>
              Provide a convenient and secure local transportation
            </Typography>
            <Box
              component="img"
              src={transpo}
              sx={{width: '102.36px',marginTop: '15px', '@media (min-width: 640px)': { width: '323px' }}}
            />
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: '#CCD5F5', padding: '30px 20px 50px 20px', borderRadius: '24px', marginTop: '24px', '@media (min-width: 640px)': { display: 'flex' } }}
        >
          <Box
            component="img"
            src={safety}
          />
          <Box
            sx={{margin: '15px', '@media (min-width: 640px)': { alignContent: 'center' }}}
          >
            <Typography sx={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '700', color: '#334155', '@media (min-width: 640px)': { fontSize: '35px' } }}>
              Customer Safety
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', '@media (min-width: 640px)': { fontSize: '17px' } }}>
              GPS tracking ensures that drivers are always on the right track
            </Typography>
          </Box>
        </Box>

      </Box>

      <AppContactForm />

    </Container>
  );
}

const AppButton = ({
  variant="contained",
  startIcon=null,
  buttonName='AppButton',
  sx,
  fullWidth,
  onClick
}) => {
  return(
    <Button
      sx={sx}
      variant={variant}
      startIcon={startIcon}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  )
}

const AppTextInput = ({
  label,
  placeholder,
  sx,
  multiline,
  value,
  onChange
}) => {
  return(
    <Box
      sx={sx}
    >
      <Typography 
        sx={{fontFamily: 'Inter', fontSize: '10px', color: '#64748B'}}
      >
        {label}
      </Typography>
      <TextField 
        id="outlined-basic" 
        variant="outlined" 
        value={value}
        fullWidth 
        placeholder={placeholder} 
        multiline={multiline} 
        onChange={onChange}
        rows={4} 
        inputProps={{ style: { color: '#64748B', fontSize: '12px' } }}
      />
    </Box>
  )
}

const AppContactForm = () => {
  const [formData, setFormData] = React.useState({name: '', email: '', message: ''});
  return(
    <Box sx={{backgroundColor: 'rgba(204, 213, 245, 0.2)', display: 'grid', justifyItems: 'center', paddingBottom: '20px', marginTop: '30px', '@media (min-width: 640px)': { paddingLeft: '300px', paddingRight: '300px', paddingBottom: '90px' } }}>
      <Box
        sx={{ textAlign: 'center', margin: '50px' }}
      >
        <Typography sx={{fontSize: '32px', fontWeight: 'Inter', color: '#182C75', fontWeight: '700'}}>
          Contact Us
        </Typography>
        <Typography sx={{fontSize: '12px', fontWeight: 'Inter', color: '#334155'}}>
          Feel free to contact us anytime. We will get back to you as soon as we can.
        </Typography>
      </Box>
      <AppTextInput 
        label='Name'
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        sx={{ margin: '12px', width: '90%' }}
      />
      <AppTextInput 
        label='Email Address'
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        sx={{ margin: '12px', width: '90%' }}
      />
      <AppTextInput 
        label='Message'
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        multiline
        sx={{ margin: '12px', width: '90%', marginBottom: '40px' }}
      />
      <AppButton 
        buttonName="Send Message"
        sx={{ backgroundColor: '#182C75', width: '90%', }}
        onClick={() => alert(JSON.stringify(formData))}
      />
    </Box>
  )
}

// --------------------------------------------------------------------------------


// Hi Angelo, currently I dont have experience using tailwind CSS. 😔
// I used the react MUI styling just to complete my coding assessment.
// But I am trying to convert it into tailwind CSS but I reached my time limit.
// Thank you for the understanding 😔


// --------------------------------------------------------------------------------
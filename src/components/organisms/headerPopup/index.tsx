import { makeStyles } from '@mui/styles';
import React from 'react';
import Text from '../../atoms/text';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import Button from '@mui/material/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import {
  AdjustOutlined,
  HourglassBottom,
  LocalHospitalOutlined,
  TempleBuddhistOutlined,
} from '@mui/icons-material';
const HeaderPopUp = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#F1F6F4 ',
      paddingTop: '30px',
      width: '1200px',
      height: '398px',
      zIndex: '10',
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      height: '304px',
    },
    parent: {
      // backgroundColor: "#F1F6F4 ",
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      color: '#6D787E',
      '&hover:': { color: '#0365F2' },
      textTransform: 'capitalize',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div className={classes.flex}>
          <Text
            variant={'body1blue'}
            text={'Explore by category'}
            height={'16px'}
            width="188px"
            color="#0365F2"
          ></Text>
          <Text
            variant={'body1'}
            text={'See recently added titles'}
            height={'16px'}
            width={'250px'}
            color="#6D787E"
          ></Text>
          <Text
            variant={'body1'}
            text={'See popular titles'}
            height={'16px'}
            width={'188px'}
            color="#6D787E"
          ></Text>
        </div>
        <br />
        <hr
          style={{
            width: '80%',
            color: 'solid #042330',
          }}
        />
        <div className={classes.flex}>
          <div className={classes.flexCol}>
            <Button
              className={classes.button}
              variant="text"
              startIcon={
                <RocketOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
              onClick={() => navigate('/enterpreuner')}
            >
              <Text
                variant={'body1'}
                text={'Entrepreneurship'}
                height={''}
              />{' '}
            </Button>
            <Button
              variant="text"
              startIcon={
                <ScienceOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text variant={'body1'} text={'Science'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <PublicIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Economics'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <BusinessCenterOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Corporate Culture'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <PsychologyOutlinedIcon
                  fontSize="large"
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Psychology'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SpaOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Nature & Environment'}
                height={''}
              />
            </Button>
          </div>
          <div className={classes.flexCol}>
            <Button
              variant="text"
              startIcon={
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text variant={'body1'} text={'Politics'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <LocalHospitalOutlined
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Health & Nutrition'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <TempleBuddhistOutlined
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text variant={'body1'} text={'History'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <EmojiObjectsOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Motivation & Inspiration'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <HourglassBottom
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Productivity'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <AdjustOutlined
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Career & Success'}
                height={''}
              />
            </Button>
          </div>

          <div className={classes.flexCol}>
            <Button
              variant="text"
              startIcon={
                <ShowChartIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Marketing & Sales'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SignalCellularAltOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Personal Development'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <ChatBubbleIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Communication Skills'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Money & Investments'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <FavoriteBorderOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Sex & Relationship'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SchoolOutlinedIcon
                  sx={{ color: '#6D787E', marginTop: '10px' }}
                />
              }
            >
              <Text
                variant={'body1'}
                text={'Education'}
                height={''}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderPopUp;

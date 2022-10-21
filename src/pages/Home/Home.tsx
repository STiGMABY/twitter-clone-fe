import React, { FC } from 'react'
import styles from './Home.module.css'
import { styled } from '@mui/material/styles'
import { Avatar, Button, Grid, IconButton, InputAdornment, Paper, Stack, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Container } from '@mui/system'
import TextField from '@mui/material/TextField'

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export const Home: FC = () => {
  return (
    <nav>
      <Container maxWidth="lg" component="div">

        <Grid container spacing={ 1 }>
          {/*LEFT*/ }
          <Grid item xs={ 2 }>
            <ul className={ styles.ul }>
              <li>
                <IconButton>
                  <TwitterIcon color="primary"/>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <HomeIcon color="primary"/>
                  <Typography variant="subtitle1">Home</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <TagIcon color="primary"/>
                  <Typography variant="subtitle1">Explore</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <PeopleOutlineIcon color="primary"/>
                  <Typography variant="subtitle1">Communities</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <NotificationsIcon color="primary"/>
                  <Typography variant="subtitle1">Notifications</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <MailOutlineIcon color="primary"/>
                  <Typography variant="subtitle1">Messages</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <BookmarkBorderOutlinedIcon color="primary"/>
                  <Typography variant="subtitle1">Bookmarks</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <PermIdentityOutlinedIcon color="primary"/>
                  <Typography variant="subtitle1">Profiles</Typography>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <MoreHorizOutlinedIcon color="primary"/>
                  <Typography variant="subtitle1">More</Typography>
                </IconButton>
              </li>
            </ul>
          </Grid>

          {/*CENTER*/ }
          <Grid item xs={ 7 }>
            <div className={ styles.middleBlock }>

              <div className={ styles.userTwitWrapper }>
                <Typography variant="h6">Home</Typography>
                <div>

                  <Stack direction="row" spacing={ 2 }>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    <TextField
                      id="outlined-multiline-static"
                      // label="Multiline"
                      multiline
                      rows={ 2 }
                      fullWidth
                      // defaultValue="Default Value"
                    />
                  </Stack>

                  <div style={ {display: 'flex', justifyContent: 'space-between'} }>
                    <div>

                    </div>
                    <Button
                      variant="contained"
                    >Tweet</Button>
                  </div>

                  <div className={styles.twitBlock}>

                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/*RIGHT*/ }
          <Grid item xs={ 3 }>
            <TextField
              id="search"
              placeholder="Search Twitter"
              margin="normal"
              InputProps={ {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>
                ),
              } }
              sx={ {
                width: {sm: 200, md: 300},
                '& .MuiInputBase-root': {
                  height: 35,
                  width: 280,
                  borderRadius: 25,
                },
              } }
            />
          </Grid>

        </Grid>
      </Container>
    </nav>
  )
}
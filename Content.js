import { Avatar, AvatarGroup, Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const cardData = [
  {
    title: "Graphic designs for production purpose",
    backgroundColor: "#424242",
    borderLeftColor: "blue",
    content: "Graphic designs for production purpose",
  },
  {
    title: "Cancel anytime with a single click in your account. No questions asked",
    backgroundColor: "#b71c1c",
    borderLeftColor: "green",
    content: "Cancel anytime with a single click in your account. No questions asked",
  },
  {
    title: "Afford relied warmth out sir hearts sister use garden",
    backgroundColor: "#424242",
    borderLeftColor: "orange",
    content: "Afford relied warmth out sir hearts sister use garden",
  },
  // Add more card data as needed
];

function Content() {
  return (
    <Stack
      style={{
        backgroundColor: "black",
        padding: "20px",
        height: "880px",
        justifyContent: "",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            color: "white",
            width: "500px",
            // height: "50px",
            backgroundColor: "#616161",
            paddingY: "15px",
            paddingX: "5px"
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
          >
            <Typography style={{marginLeft: "10px"}} color={"#4a148c"} fontSize={"20px"} fontWeight={"800"}>Things to do</Typography>
            <MoreVertIcon />
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            width: "500px",
            // height: "50px",
            backgroundColor: "#616161",
            paddingY: "15px",
            paddingX: "5px"
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
          >
            <Typography style={{marginLeft: "10px"}} color={"#4a148c"} fontSize={"20px"} fontWeight={"800"}>Doing</Typography>
            <MoreVertIcon />
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            width: "500px",
            // height: "50px",
            backgroundColor: "#616161",
            paddingY: "15px",
            paddingX: "5px"
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
          >
            <Typography style={{marginLeft: "10px"}} color={"#4a148c"} fontSize={"20px"} fontWeight={"800"}>Done</Typography>
            <MoreVertIcon />
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ width: "500px", height: "auto", backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid blue"}} borderLeft={"3px solid blue"}>
            <Stack direction={"column"} color={"white"}>
          Graphic designs for production purpose
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar> */}
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto", backgroundColor: "#b71c1c" , padding: "5px", borderLeft: "3px solid blue"}} borderLeft={"3px solid green"}>
        <Stack direction={"column"} color={"white"}>
          Cancel anytime with a single click in your account. No questions asked
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px", borderLeft: "3px solid blue" }} borderLeft={"3px solid orange"}>
        <Stack direction={"column"} color={"white"}>
          Afford relied warmth out sir hearts sister use garden.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar> */}
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar> */}
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ width: "500px", height: "auto", backgroundColor: "#424242"  , padding: "5px", borderLeft: "3px solid pink"}}>
        <Stack direction={"column"} color={"white"} >

          Carried nothing on a warrant towards. Polite in of in oh needed itself
          on silent course.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid orange"}}>
        <Stack direction={"column"} color={"white"} >
          Video edidting for instagram add. 
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar> */}
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px", borderLeft: "3px solid yellow" }}>
        <Stack direction={"column"} color={"white"} >
          Wanted easily in my called formed suffer
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar> */}
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px" , borderLeft: "3px solid blue"}}>
        <Stack direction={"column"} color={"white"} >

          Promotional video creation
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar> */}
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px" , borderLeft: "3px solid brown"}}>
        <Stack direction={"column"} color={"white"} >

          It had to resolve otherwise she contented there is Afford relied
          warmth out sir hearts sister use garden admire former simple.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar> */}
              {/* <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar> */}
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px" , borderLeft: "3px solid cyan"}}>
        <Stack direction={"column"} color={"white"} >

          Humanity declared victinity continued supplied.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid green"}}>
        <Stack direction={"column"} color={"white"}>

          packaging design for diwali festival
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid pink"}}>
        <Stack direction={"column"} color={"white"}>
 
          Impression up admiration he by patially is one day.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242", padding: "5px" , borderLeft: "3px solid yellow"}}>
        <Stack direction={"column"} color={"white"}>

          Do danger in to adieus ladies houses on eldest.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid red"}}>
        <Stack direction={"column"} color={"white"} >
          Graphic designs for production purpose
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto", backgroundColor: "#424242" , padding: "5px" , borderLeft: "3px solid orange"}}>
        <Stack direction={"column"} color={"white"}>
          Hope they dear who its bred.
          <Stack direction={"row"} justifyContent={"space-between"}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
        <Card sx={{ width: "500px", height: "auto" , backgroundColor: "#424242" , padding: "5px", borderLeft: "3px solid blue"}}>
        <Stack direction={"column"} color={"white"} >

          It had to resolve otherwise she contented there is Afford relied
          warmth out sir hearts sister use garden admire former simple.
          <Stack direction={"row"} justifyContent={"space-between"} sx={{marginTop:"10px"}}><Typography style={{marginTop: "auto"}}>Date</Typography><AvatarGroup max={4} sx={{fontSize: "small", marginRight: 2}}>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>60X5</Avatar>
              <Avatar alt="Remy Sharp" sx={{fontSize: "small", color: "black"}}>50X5</Avatar>
              {/* <Avatar sx={{background: "#311b92", color: "#311b92", borderColor: "#311b92"}} /> */}
            </AvatarGroup></Stack>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ color: "white" }}
        width={"100%"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button sx={{ width: "510px", height: "60px" , backgroundColor: "#424242", color: "white"}}>
          + Add another card
        </Button>
        <Button sx={{ width: "510px", height: "60px" , backgroundColor: "#424242" , color: "white",}}>
          + Add another card
        </Button>
        <Button sx={{ width: "510px", height: "60px" , backgroundColor: "#424242", color: "white"}}>
          + Add another card
        </Button>
      </Stack>
    </Stack>
  );
}

export default Content;

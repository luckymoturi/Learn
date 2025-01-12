import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Avatar,
  Paper,
  Container,
  LinearProgress,
  colors,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Header from "./Header";

const SubjectChip = styled(Chip)(({ theme, color }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: color,
  color: "white",
}));

const TestResultsDashboard = () => {
  const subjects = [
    { name: "Geography", color: "#10B981" },
    { name: "Politics", color: "#F59E0B" },
    { name: "Current Affairs", color: "#06B6D4" },
    { name: "General Studies", color: "#3B82F6" },
    { name: "Mathematics", color: "#22C55E" },
    { name: "Social Studies", color: "#9CA3AF" },
    { name: "English Literature", color: "#EF4444" },
    { name: "Indian History", color: "#F59E0B" },
    { name: "Economics", color: "#14B8A6" },
  ];

  const accuracyData = [
    { slot: 1, accuracy: 85 },
    { slot: 2, accuracy: 45 },
    { slot: 3, accuracy: 35 },
    { slot: 4, accuracy: 65 },
    { slot: 5, accuracy: 55 },
    { slot: 6, accuracy: 45 },
    { slot: 7, accuracy: 65 },
  ];

  const approachData = [
    { type: "Based on Facts", percentage: 25 },
    { type: "Based on Analysis", percentage: 32 },
    { type: "Based on Elimination", percentage: 19 },
    { type: "Based on Guess", percentage: 24 },
  ];

  const difficultyLevels = [
    { time: "0-1:12", level: "Easy", color: "#22C55E" },
    { time: "1:12-3:32", level: "Medium", color: "#F59E0B" },
    { time: "3:32-4:40", level: "Hard", color: "#EF4444" },
  ];

  const timeIntervals = ['10MIN', '15MIN', '30MIN', '45MIN'];


  return (
    <Container maxWidth="xl" disableGutters>
      <Header />

      <Container maxWidth="xl" sx={{ py: 4, color: 'white' }} disableGutters>
        <Grid container spacing={3} sx={{ backgroundColor: 'whitesmoke' }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", bgcolor: "#F8F9FA" }}>
              <CardContent>
                <Box textAlign="center" mb={10}>
                  <Typography variant="h5" color="primary">
                    Your Result!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All your insights & details in one place
                  </Typography>
                </Box>

                <Card sx={{ p: 2, mb: 3, mt: 2 }}>
                  <Paper sx={{ p: 2, mb: 3 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Chip
                        label="YOU'VE PASSED!"
                        color="primary"
                        size="small"
                      />
                      <Typography color="success.main">76% ACCURACY</Typography>
                    </Box>
                    <Box display="flex" alignItems="baseline">
                      <Typography variant="h4" component="span">
                        136
                      </Typography>
                      <Typography color="text.secondary">/240</Typography>
                    </Box>
                  </Paper>

                  <Paper sx={{ p: 2, mb: 3 }}>
                    <Box display="flex" gap={2} mb={2}>
                      <Avatar alt="Top Scorer" src="/path-to-avatar.jpg" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Top Score
                        </Typography>
                        <Typography variant="h6">
                          230
                          <Typography component="span" color="text.secondary">
                            /240
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body2">By Parth Akotkar</Typography>
                      <Chip label="92% ACCURACY" color="success" size="small" />
                    </Box>
                  </Paper>
                  <Box mb={3}>
                    <Typography variant="h6" color="primary">
                      Improve your Marks
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Improve Your score by practicing more.
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mb: 3 }}
                  >
                    Practice more
                  </Button>
                </Card>

                <Paper sx={{ p: 2, mt: 15 }}>
                  <Typography variant="h6" gutterBottom>
                    Revisit Paper
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Challenge your friends by simply sharing a link to this test
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Visit
                  </Button>
                </Paper>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              gap={2}
            >
              <Card
                sx={{
                  flex: "1 1 30%",
                  minWidth: 200,
                  maxWidth: 300,
                  paddingBottom: 10,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Compare Accuracy
                  </Typography>
                  {/* <Box display="flex" flexWrap="wrap" gap={0}>
                  {subjects.map((subject, index) => (
                    <SubjectChip
                      key={index}
                      label={subject.name}
                      color={subject.color}
                    />
                  ))}
                </Box> */}
                </CardContent>
              </Card>
              <Card sx={{ flex: "1 1 30%", minWidth: 200, maxWidth: 300 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Compare Accuracy
                  </Typography>
                  {/* <Box display="flex" flexWrap="wrap" gap={0}>
                  {subjects.map((subject, index) => (
                    <SubjectChip
                      key={index}
                      label={subject.name}
                      color={subject.color}
                    />
                  ))}
                </Box> */}
                </CardContent>
              </Card>
              <Card sx={{ flex: "1 1 30%", minWidth: 200, maxWidth: 300 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Compare Accuracy
                  </Typography>
                  {/* <Box display="flex" flexWrap="wrap" gap={0}>
                  {subjects.map((subject, index) => (
                    <SubjectChip
                      key={index}
                      label={subject.name}
                      color={subject.color}
                    />
                  ))}
                </Box> */}
                </CardContent>
              </Card>
            </Box>

            <Box
              display="flex"
              flexWrap="nowrap"
              justifyContent="space-between"
              gap={1}
              sx={{ mt: 2, mb: 2 }}
            >
              <Card
                sx={{
                  flex: "1 1 25%",
                  minWidth: 150,
                  maxWidth: 250, 
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Subject Understanding
                  </Typography>
                  <Box display="flex" flexWrap="nowrap" gap={1}>
                    {subjects.map((subject, index) => (
                      <SubjectChip
                        key={index}
                        label={subject.name}
                        color={subject.color}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: "1 1 25%", 
                  minWidth: 150, 
                  maxWidth: 250,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Response Time
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="h5" color="primary">
                      60<Typography component="span">%</Typography>
                    </Typography>
                    <Box display="flex" alignItems="center" color="error.main">
                      <TrendingUpIcon />
                      <Typography>2min</Typography>
                    </Box>
                  </Box>
                  <Typography color="error.main">You are slow!</Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: "1 1 25%",
                  minWidth: 150, 
                  maxWidth: 250, 
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Approach Data
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={1}>
                    {approachData.map((item, index) => (
                      <Box
                        key={index}
                        display="nowrap"
                        alignItems="center"
                        gap={1}
                      >
                        <Chip
                          label={`${item.percentage}%`}
                          color="primary"
                          variant="outlined"
                        />
                        <Typography>{item.type}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: "1 1 25%",
                  minWidth: 150, 
                  maxWidth: 250,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Suggestions
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={1}>
                    {difficultyLevels.map((level, index) => (
                      <Box
                        key={index}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Chip
                          label={level.time}
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label={level.level}
                          sx={{
                            bgcolor: level.color,
                            color: "white",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Compare Accuracy
            </Typography>
            <Box sx={{ width: "100%", height: 300, ml: -8, mt: 2 }}>
              <LineChart
                width={800}
                height={250}
                data={accuracyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="slot" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
      <Card>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Time Taken
        </Typography>

        {[1, 2].map((item) => (
          <Box key={item} sx={{ mb: 4 }}>
            <Box sx={{ position: 'relative', height: 40, bgcolor: '#F3F4F6', borderRadius: 2, mb: 1 }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    left: `${i * 10}%`,
                    height: '100%',
                    width: 1,
                    bgcolor: '#D1D5DB',
                  }}
                />
              ))}
              
              <Box sx={{ 
                position: 'absolute',
                top: 8,
                left: '30%',
                width: '30%',
                height: 24,
                bgcolor: item === 1 ? '#EF4444' : '#22C55E',
                borderRadius: 2
              }} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption">10sec</Typography>
              <Typography variant="caption">90</Typography>
            </Box>

            <Typography variant="body2" color="text.secondary">
              Lorem ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
      </Grid>
    </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default TestResultsDashboard;

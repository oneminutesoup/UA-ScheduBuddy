import { Grid, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    backgroundColor: "#EDECEC",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  Media: {
    height: "auto",
    width: "auto",
    maxHeight: "90%",
    maxWidth: "90%",
  },
});

const AliasDesc = ({ aliases, schedule }) => {
  const classes = useStyles();

  const checkAliasMap = (classObj) => {
    const classId = classObj.class;
    if (classId in aliases) {
      const alias_str = aliases[classId]
        .map((alias) => `${alias[1]} (${alias[0]})`)
        .join(", ");
      return `${classObj.asString} has the same times as: ${alias_str}.`;
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container direction="column" className={classes.content}>
          {schedule.map((sched, index) => (
            <Typography key={index} variant="subtitle1">
              {checkAliasMap(sched.objects)}
            </Typography>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AliasDesc;

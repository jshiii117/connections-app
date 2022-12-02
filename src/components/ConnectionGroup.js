import { Typography, Grid, Box } from "@material-ui/core";
import ConnectionCard from "./ConnectionCard";

const cards = [1, 2, 3, 4, 5, 6, 7];

export default function ConnectionGroup() {
    return (
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3} l={2} xl={2}>
                <ConnectionCard/>
              </Grid>
            ))}
          </Grid>
    );
}

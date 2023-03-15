import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function ProductCard({movieId, title, rating, voteCount, description, image}) {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
 
    return (
        <Card className="w-96 mx-2 border-1 border-black border-solid ">
            <CardHeader color="blue" className="relative h-54">
                {<img
                    src={image}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />}
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {title}
                </Typography>
                <Fragment>
                  <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                      Description
                    </AccordionHeader>
                    <AccordionBody>
                      {description}
                    </AccordionBody>
                  </Accordion>
                </Fragment>
                <div className="save">
                    <div className="w-72">
                        <Select label="Rate Me" color="blue-gray" className="accent-pink-500" >
                            <Option>🍌🍌🍌🍌🍌</Option>
                            <Option>🍌🍌🍌🍌</Option>
                            <Option>🍌🍌🍌</Option>
                            <Option>🍌🍌</Option>
                            <Option>🍌</Option>
                        </Select>
                    </div>
                   
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-2. overflow-hidden font-medium transition-all bg-amber-200 rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-400 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-amber-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<button className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">save</button>
</a>
                     
                </div>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Banameter: {rating} ({voteCount})🍌
                </Typography>
            </CardFooter>
            {/* {Auth.loggedIn() && (
                    <Button
                      disabled={savedMovieIds?.some(
                        (savedMovieId) => savedMovieId === movie.movieId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveMovie(movie.movieId)}
                    >
                      {savedMovieIds?.some(
                        (savedMovieId) => savedMovieId === movie.movieId
                      )
                        ? "Already in your Watchlist!"
                        : "Add to Watchlist"}
                    </Button>
            )} */}
        </Card>
    );
}
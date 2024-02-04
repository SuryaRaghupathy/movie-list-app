import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/joy/Button";

export default function BasicModal({ movieDetails }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <FontAwesomeIcon
        icon={faCircleInfo}
        onClick={() => setOpen(true)}
        className="fa-2x cursor-pointer mr-2"
      />

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          sx={{
            maxWidth: 800,
            borderRadius: "md",
            p: 3,
          }}
        >
          <ModalClose variant="plain" />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            <div className="flex">
              <div className="p-4">
                {" "}
                <img
                  src={movieDetails.big_image}
                  alt={movieDetails.title}
                  style={{ maxWidth: "500px", height: "530px" }}
                />
              </div>
              <div className="m-5">
                <div className="mb-10">
                  {" "}
                  {movieDetails.title}
                  <div className="font-bold text-lg pt-3">
                    {movieDetails.year} | {movieDetails.genre.join(" . ")}
                  </div>
                  <div className="font-bold text-lg pt-3">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    {movieDetails.rating} / 10
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                  {" "}
                  <Typography
                    id="modal-desc"
                    textColor="text.tertiary"
                    className="mb-5"
                  >
                    {movieDetails.description}
                  </Typography>
                  <div className=" container item-center justify-center pt-10">
                    <Button
                      variant="outlined"
                      color="neutral"
                      style={{
                        maxWidth: "150px",
                        maxHeight: "300px",
                        backgroundColor: "#eee477",
                      }}
                      onClick={() =>
                        window.open(movieDetails.imdb_link, "_blank")
                      }
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

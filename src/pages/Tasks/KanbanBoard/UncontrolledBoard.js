import React from "react";
import Board from "@lourenci/react-kanban";
import { Row, Col } from "reactstrap";
import CardTaskBox from "./taskCard";
import RenderCardTitle from "./HeaderComponets";

const UncontrolledBoard = props => {
  const content = props.board;
  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col>
          <Board
          
            initialBoard={content}
            renderColumnHeader={({ name, badge, badgeClass }) => (
              <RenderCardTitle name={name} badge={badge} badgeClass={badgeClass} />
            )}
            renderCard={(data, { dragging }) => (
              <CardTaskBox data={data} dragging={dragging}>
                {data}
              </CardTaskBox>
            )}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard,
            })}
             />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UncontrolledBoard;

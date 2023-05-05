import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

it("renders without crashing", function() {
    render(<Card />);
    }
);

it("matches snapshot", function() {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
    }
);
import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";

function LayoutEffect() {

	const [num, setNum] = useState(0);

    useLayoutEffect(() => {
    if (num === 0) setNum(num + Math.random() * 100);
  }, [num]);

  return (
	<Wrapper>
      <p>my new random number {num}</p>
      <button onClick={() => setNum(0)}>random num</button>
    </Wrapper>
  )
}
const Wrapper = styled.section``;

export default LayoutEffect
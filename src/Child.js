import React from 'react'
import { useGlobalContext } from "./components/usecontext/userContext";

function Child() {

	const userData = useGlobalContext();

  return (
	<div>
      Child = My name is {userData.name} and my age is {userData.age}.{" "}
    </div>
  )
}

export default Child
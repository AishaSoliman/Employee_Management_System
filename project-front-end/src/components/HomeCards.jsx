// import React from 'react'
import Card from "./Card"
const HomeCards = () => {
  return (
    // <div>HomeCards</div>
    <>
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Employee</h2>
            <p className="mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium obcaecati tenetur harum dicta ab perspiciatis natus recusandae consequatur, enim maxime labore dolor repudiandae tempore cum aliquam autem odio praesentium?
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              lorem ipsum
            </a>
          </Card>
          <Card>
          <h2 className="text-2xl font-bold">For Companies</h2>
            <p className="mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique eveniet porro, sed deserunt ullam illum optio? Consequuntur aliquam nemo accusantium? Atque accusantium neque quibusdam tempore. Magni mollitia sequi assumenda et?
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Lorem ipsum
            </a>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeCards
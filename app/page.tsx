export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-white rounded-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to Batout&apos;s Custom Grade Calculator
      </h1>
      <p className="text-lg text-center mb-8">
        With Batout, your grades are the most customizable. Easily track and
        calculate your academic progress.
      </p>

      <div className=" bg-[#9de46d3a]  p-6 rounded-md shadow-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-md mb-4">
          This platform allows you to customize your grade calculations in three
          ways:
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Manual:</strong> You&apos;ll be able to input your grades
            and fully control the calculator with a simple form.
          </li>
          <li>
            <strong>Template:</strong> Search using keywords like
            &quot;specialty,&quot; &quot;year,&quot; and &quot;wilaya
            number&quot; to find ready-to-use templates tailored to your
            academic path.
          </li>
          <li>
            <strong>Yearly:</strong> Easily add up your semester grades to track
            your yearly progress with minimal effort.
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-lg">
          Choose the appropriate section above to get started with your grade
          calculation.
        </p>
      </div>
    </div>
  );
}

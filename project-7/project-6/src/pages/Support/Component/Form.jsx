import { MdCheckBox } from 'react-icons/md'

const Form = () => {
  return (
    <div className="min-w-0 w-full p-6 mx-auto  bg-white text-gray-600 rounded-lg shadow-md">
      <p className="">You will receive a response within 24 hours of submission.</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label>Name:</label>
              <input type="text" className="border-2 max-w-[150px] border-gray-300 rounded-lg p-2" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label>Surname:</label>
              <input type="text" className="border-2 max-w-[150px] border-gray-300 rounded-lg p-2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Email:</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              required
              className="border-2 max-w-[350px] border-gray-300 rounded-lg p-2"
            />
          </div>

          <div className="flex flex-col">
            <label>Message:</label>
            <textarea
              placeholder="Your message"
              className="border-2 max-w-[350px] border-gray-300 rounded-lg p-2"
              rows={2}
            />
          </div>

          <div className="flex flex-row gap-1 items-center">
            <input type='checkbox' />
            <p>I agree with</p>
            <p className="text-[#5F00D9] cursor-pointer">Terms and Conditions</p>
          </div>

          <div className="bg-gray-300 rounded-lg p-2 max-w-[350px] text-center cursor-pointer hover:bg-gray-400">
            Send a Message
          </div>
          <div className="bg-gray-200 rounded-lg p-2 max-w-[350px] text-center cursor-pointer hover:bg-gray-400">
            Book a Meeting
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Form

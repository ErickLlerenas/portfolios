import { useForm, SubmitHandler } from "react-hook-form";
import { GMAIL } from "./constants";

type Inputs = {
	subject: string;
	body: string;
};

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL}&su=${
			data.subject
		}&body=${encodeURIComponent(data.body)}`;

		window.open(url, "_blank");
	};

	return (
		<div className="w-full p-16">
			<h2 className="text-4xl font-bold">Conctact</h2>
			<div className="grid grid-cols-2 gap-8 mt-8">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder="Subject"
						defaultValue=""
						{...register("subject")}
						required
					/>

					<input
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder="Body"
						defaultValue=""
						{...register("body", { required: true })}
						required
					/>

					<div className="pt-10">
						<input
							type="submit"
							className="bg-gray-200 flex flex-col p-2.5 rounded-lg items-center text-gray-700 text-sm font-bold cursor-pointer hover:bg-gradient-to-r from-pink-500 to-orange-400 hover:text-white px-5"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

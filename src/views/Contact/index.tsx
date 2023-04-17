import { FC } from "react";
import { useForm } from "react-hook-form";

import Card from "../../components/Card";
import useContact from "./hooks/useContact";

import { Inputs } from "./types";

const Contact: FC = () => {
	const { register, handleSubmit } = useForm<Inputs>();
	const { onSubmit } = useContact();

	return (
		<Card title="Contact">
			<div className="flex flex-col">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
					<div>
						<label
							htmlFor="subject"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Mail Subject
						</label>

						<input
							id="subject"
							className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
							placeholder="Enter the mail subject..."
							{...register("subject")}
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Body Message
						</label>

						<textarea
							id="message"
							rows={6}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
							placeholder="Enter your message..."
							{...register("body", { required: true })}
							required
						/>
					</div>

					<button
						type="submit"
						className="my-background my-hover py-3 px-10 rounded-xl cursor-pointer"
					>
						Submit
					</button>
				</form>
			</div>
		</Card>
	);
};

export default Contact;

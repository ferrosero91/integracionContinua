import RegisterForm from "../components/RegisterForm";

export default function RegisterFormView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Formulario de Registro</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
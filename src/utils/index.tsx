export const changeClass = (element: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    document.querySelectorAll('li').forEach((e) => e.classList.remove('active'));
    element.currentTarget.classList.add('active');
}
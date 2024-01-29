export const UseFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Самый встречающийся кейс - обработка индикатора загрузки
    // обработка ошибки и выполнение колбэка
    const fetching = async ()=> {
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }
    
    return [fetching, isLoading, error]
}
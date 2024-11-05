///// https://www.youtube.com/watch?v=cwToXW32tbA

///// использование в addEventListener() - замена removeEventListener()
const listener = () => console.log('Resize listener');
const abortController = new AbortController();
window.addEventListener('resize', listener, { signal: abortController.signal });
setTimeout(() => {
    abortController.abort();
}, 3000);


///// групповые отмены слушателей
useEffect(() => {
    const abortController = new AbortController();

    window.addEventListener('resize', resizeListener, { signal: abortController.signal });
    window.addEventListener('hashChange', hashChangeListener, { signal: abortController.signal });
    window.addEventListener('storage', storageListener, { signal: abortController.signal });

    return () => {
        // вызов abort() удалит все обработчики событий, ассоциированные с abortController.signal
        abortController.abort();
    };
}, []);

///// использование нескольких instance AbortController для удаления слушателей
const externalAbortController = new AbortController();
const internalAbortController = new AbortController();
window.addEventListener('resize', listener, {
    // при вызове abort() у любого из abortController, обработчик событий будет удален
    signal: AbortSignal.any([externalAbortController.signal, internalAbortController.signal])
});

///// использование в fetch
function uploadFile(file) {
    const abortController = new AbortController();

    const response = fetch('/upload', {
        method: 'POST',
        body: file,
        signal: abortController.signal
    });

    return { response, abortController };
}

///// можно выставить timeout на AbortSignal
fetch(url, {
    // Прервать этот запрос автоматически если запрос занимает больше 3 сек.
    signal: AbortSignal.timeout(3000)
})

///// AbortController интегрирован c Stream API
///// а так же мы можем слушать событие 'abort' тем же addEventListener
///// и пробрасывать в listener поле reason
const stream = new WritableStream({
    write(chunck, abortController) {
        abortController.signal.addEventListener('abort', () => {
            // логика отмены стрима
            console.log(abortController.signal.reason); // user cancellation
        });
    }
});

const writer = stream.getWriter();
await writer.abort('user cancellation');
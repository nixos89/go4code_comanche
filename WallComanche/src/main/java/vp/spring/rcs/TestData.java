package vp.spring.rcs;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Post;
import vp.spring.rcs.model.User;
import vp.spring.rcs.service.PostService;
import vp.spring.rcs.service.UserService;

@Component
public class TestData {

	@Autowired
	UserService userService;

	@Autowired
	PostService postService;

	// Inicijalizacija testnih podataka.
	@PostConstruct
	public void init() {

		User user1 = new User("dzej", "mrakmrak", "Dzej", "Ramanov", "dzej@gmail.com");
		userService.save(user1);

		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		// String cur_date = sdf.format(new Date());

		// DateFormat formatter1 = new SimpleDateFormat("2018/09/05");
		// Date dateFormat =
		// DateTimeFormatter formatter = new DateTimeFormatterBuilder();
		// LocalDate localDate = new LocalDateParser(formatter);
		Date dateTime1 = null;
		Date dateTime2 = null;
		try {
			String str1 = "2018-05-12 11:03:15";
			String str2 = "2018-04-15 23:05:23";
			// DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd
			// HH:mm:ss");
			// LocalDate dateTime1 = LocalDate.parse(str1, formatter);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			dateTime1 = (Date) sdf.parse(str1);
			dateTime2 = (Date) sdf.parse(str2);
		} catch (Exception e) {
			e.printStackTrace();
		}

		Post post1 = new Post(user1, new Date(), dateTime1, "Ovo je neki tekst", 5, 4.5);
		postService.save(post1);

		User user2 = new User("prika", "pirotrules", "Prika", "Prikic", "prika@gmail.com");
		user2 = userService.save(user2);

		Post post2 = new Post(user2, new Date(), dateTime2, "Ovo je neki novi tekst", 2, 3.5);
		postService.save(post2);

		// Kategorija pizza = new Kategorija("pizza");
		// kategorijaService.saveKategorija(pizza);
		//
		// Kategorija dessert = new Kategorija("dessert");
		// kategorijaService.saveKategorija(dessert);
		//
		// Kategorija vine = new Kategorija("vine");
		// kategorijaService.saveKategorija(vine);
		//
		// Kategorija coffee = new Kategorija("coffee");
		// kategorijaService.saveKategorija(coffee);
		//
		// Kategorija pasta = new Kategorija("pasta");
		// kategorijaService.saveKategorija(pasta);
		//
		// Stavka pizzaRomana = new Stavka("pizza romana", 5.5, pizza);
		// stavkaService.saveStavka(pizzaRomana);
		//
		// Stavka pannaCotta = new Stavka("panna cotta", 3.5, dessert);
		// stavkaService.saveStavka(pannaCotta);
		//
		// Stavka tiramisu = new Stavka("tiramisu", 4.0, dessert);
		// stavkaService.saveStavka(tiramisu);
		//
		// Stavka cannelloniAlForno = new Stavka("cannelloni al forno", 3.5, pasta);
		// stavkaService.saveStavka(cannelloniAlForno);
		//
		// Stavka chiantiConteLS0175 = new Stavka("chianti Conte large somana 0.175",
		// 3.5, vine);
		// stavkaService.saveStavka(chiantiConteLS0175);
		//
		// Stavka chiantiConteLS75 = new Stavka("chianti Conte large somana 0.75", 10,
		// vine);
		// stavkaService.saveStavka(chiantiConteLS75);
		//
		// Stavka cappucino = new Stavka("cappucino", 1.5, coffee);
		// stavkaService.saveStavka(cappucino);
		//
		// Author milesDavis = new Author("Miles Davis");
		// authorService.save(milesDavis);
		//
		// Author johnColtrane = new Author("John Coltrane");
		// authorService.save(johnColtrane);
		//
		// Author bobDylan = new Author("Bob Dylan");
		// authorService.save(bobDylan);
		//
		// Style coolJazz = new Style("Cool jazz");
		// styleService.save(coolJazz);
		//
		// Style jazz = new Style("Jazz");
		// styleService.save(jazz);
		//
		// Style avantGardeJazz = new Style("Avant-garde jazz");
		// styleService.save(avantGardeJazz);
		//
		// Style rockAndRoll = new Style("Rock and roll");
		// styleService.save(rockAndRoll);
		//
		// Record highway61Revisited = new Record("Highway 61 Revisited",
		// "https://upload.wikimedia.org/wikipedia/en/9/95/Bob_Dylan_-_Highway_61_Revisited.jpg",
		// 700, bobDylan);
		// highway61Revisited.getStyles().add(rockAndRoll);
		// recordService.save(highway61Revisited);
		//
		// Record birthOfTheCool = new Record("Birth of the
		// Cool","https://upload.wikimedia.org/wikipedia/en/a/a8/Birth_of_the_Cool.jpg",
		// 950, milesDavis);
		// birthOfTheCool.getStyles().add(jazz);
		// birthOfTheCool.getStyles().add(coolJazz);
		// recordService.save(birthOfTheCool);
		//
		// Record interstellarSpace = new Record("Interstellar Space",
		// "https://upload.wikimedia.org/wikipedia/en/2/26/John_Coltrane_Interstellar_Space.jpg",
		// 500, johnColtrane);
		// interstellarSpace.getStyles().add(jazz);
		// interstellarSpace.getStyles().add(avantGardeJazz);
		// recordService.save(interstellarSpace);
	}

}
